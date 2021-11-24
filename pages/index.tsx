import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config";
import React from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [t, { language }] = useTranslation();
  const router = useRouter();

  return (
    <div>
      <div>
        <Link href="/" locale="de">
          <button disabled={router.locale === "de"}>DE</button>
        </Link>
        <Link href="/" locale="fr">
          <button disabled={router.locale === "fr"}>FR</button>
        </Link>
      </div>
      {language === "de" ? (
        <Link locale={false} href="/de/search" as="/suchen">
          <a>{t("gosearch")}</a>
        </Link>
      ) : (
        <Link locale={false} href="/fr/search" as="/chercher">
          <a>{t("gosearch")}</a>
        </Link>
      )}
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

export default Home;
