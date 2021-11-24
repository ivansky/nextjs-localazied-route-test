const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return [
      {
        source: "/suchen",
        destination: "/de/search",
      },
      {
        source: "/chercher",
        destination: "/fr/search",
      },
    ];
  },
};
