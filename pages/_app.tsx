import "tailwindcss/tailwind.css";
import "@/app/globals.css";
import { AppInitialProps } from "next/app";
import React from "react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: AppInitialProps;
}) {
  return <Component {...pageProps} />;
}

export default MyApp;
