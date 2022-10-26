import Image from "next/image";
import {
  HomeContainer,
  ProductDetailsContainer,
  Product,
} from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import Link from "next/link";
import Head from "next/head";
import GreenBagLogo from "../assets/green-bag.svg";
import { CartOverlay } from "../components/cart-overlay";
import { useState } from "react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {


  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">

        {products?.map((product) => (
          <Link
            key={product.id}
            href={`product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <ProductDetailsContainer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </ProductDetailsContainer>
                <Image src={GreenBagLogo} width={56} height={56} alt="" />
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const productsResponse = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = productsResponse.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
