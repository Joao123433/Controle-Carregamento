import Header from "@/components/Header";
import { RootLayout } from "@/components/rootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
