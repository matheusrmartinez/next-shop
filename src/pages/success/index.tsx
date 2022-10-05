import { GetServerSideProps } from "next";
import Link from "next/link";
import { Routes } from "../../enums/routes";
import { stripe } from "../../lib/stripe";
import { ImageContainer, SuccessContainer } from "../../styles/pages/success";
import Image from "next/image";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  checkoutSession: {
    customerName: string;
    product: {
      itemDescription: string;
      imageUrl: string;
    };
  };
}

export default function Success({ checkoutSession }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada! | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          <Image
            width={120}
            height={110}
            alt=""
            src={checkoutSession.product.imageUrl}
          />
        </ImageContainer>
        <p>
          Uhuul <strong>{checkoutSession.customerName}</strong>, sua{" "}
          <strong>{checkoutSession.product.itemDescription}</strong> já está a
          caminho da sua casa.{" "}
        </p>
        <Link href={Routes.Home}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query?.session_id as string;

  if (!sessionId) {
    return {
      redirect: {
        destination: Routes.Home,
        permanent: false,
      },
    };
  }

  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const product = checkoutSession.line_items.data[0].price
    .product as Stripe.Product;

  const checkoutSessionFormatted = {
    customerName: checkoutSession.customer_details.name,
    product: {
      itemDescription: checkoutSession.line_items.data[0].description,
      imageUrl: product.images[0],
    },
  };

  return {
    props: {
      checkoutSession: checkoutSessionFormatted,
    },
  };
};
