import type { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [, { language }] = useTranslation();
  return (
    <div>
      <div>Language is {String(language)}</div>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
