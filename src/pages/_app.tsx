import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/future/image";

import logoSVG from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Link from "next/link";
import { Routes } from "../enums/routes";
import CheckoutLogo from "../assets/bag.svg";
import { useState } from "react";
import { CartOverlay } from "../components/cart-overlay";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);

  return (
    <Container>
      <Header>
        <Link href={Routes.Home}>
          <Image src={logoSVG} alt="" />
        </Link>
        <Link href={Routes.Home}>
          <Image
            src={CheckoutLogo}
            alt=""
            onClick={() => setIsCartOverlayVisible(true)}
          />
          <span>3</span>
        </Link>
      </Header>
      <CartOverlay
        visible={isCartOverlayVisible}
        setVisible={() => setIsCartOverlayVisible(false)}
      />
      <Component {...pageProps} />
    </Container>
  );
}
