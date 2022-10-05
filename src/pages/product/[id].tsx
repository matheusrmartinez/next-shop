import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { Routes } from "../../enums/routes";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import Head from "next/head";

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function ProductDetail({ product }: ProductDetailsProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const handleBuyProduct = async () => {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${Routes.Checkout}`,
        {
          data: {
            priceId: product.defaultPriceId,
          },
        }
      );

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      // TODO: Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      console.error(`Falha no processo de compra. ${error}`);
    }
  };
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image width={520} height={480} alt="" src={product.imageUrl} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  const formattedProduct = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    description: product.description,
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
    defaultPriceId: price.id,
  };

  return {
    props: { product: formattedProduct },
    revalidate: 60 * 60 * 1, // 1 hour,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
