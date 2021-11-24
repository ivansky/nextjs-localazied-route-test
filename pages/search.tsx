import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { i18n } from "../next-i18next.config";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";

const Search: NextPage = () => {
  const [t, { language }] = useTranslation();

  return (
    <div>
      <div>
        <Link href="/de/search" as="/suchen" locale={false}>
          <button disabled={language === "de"}>DE</button>
        </Link>
        <Link href="/fr/search" as="/chercher" locale={false}>
          <button disabled={language === "fr"}>FR</button>
        </Link>
      </div>
      <h1>{t("search.title")}</h1>
      <Link href="/" as={language === "fr" ? "/fr" : "/"} passHref={true}>
        <a>Go back</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps({
  locale = i18n.defaultLocale,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Search;
