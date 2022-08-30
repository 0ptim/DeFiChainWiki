const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DeFiChain-Wiki",
  url: "https://defichain.com/",
  baseUrl: "/DeFiChain-Wiki/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  organizationName: "0ptim",
  projectName: "DeFiChain-Wiki",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "tr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/0ptim/DeFiChain-Wiki/tree/main/",
          editLocalizedFiles: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "DeFiChain-Wiki",
        logo: {
          alt: "DeFiChain Wiki Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "auto/Welcome",
            label: "📖 Knowledgebase",
          },
          {
            href: "https://defiscan.live/",
            label: "🔍 Explorer",
          },
          {
            href: "https://blog.defichain.com/",
            label: "📰 Blog",
          },
          {
            href: "https://defichain.com/",
            label: "🌐 Website",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/0ptim/DeFiChain-Wiki",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Main Website",
                href: "https://defichain.com/",
              },
              {
                label: "DeFiChain Explorer",
                href: "https://defiscan.live/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/defichain",
              },
              {
                label: "Blog",
                href: "https://blog.defichain.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub (This wiki)",
                href: "https://github.com/0ptim/DeFiChain-Wiki",
              },
              {
                label: "GitHub (DeFiChain)",
                href: "https://github.com/DeFiCh",
              },
              {
                label: "Privacy Policy",
                href: "https://defichain.com/privacy-policy/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DeFiChain Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: '00a233bca9e11e8baf6f03174dd7ebb5',
        indexName: 'defichain_wiki',
        contextualSearch: true,
        appId: '8RV2QHX307',
        searchParameters: {},
      },
    }),
};

module.exports = config;
