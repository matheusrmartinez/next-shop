import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Image from "next/future/image";

import logoSVG from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Link from "next/link";
import { Routes } from "../enums/routes";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={Routes.Home}>
          <Image src={logoSVG} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
