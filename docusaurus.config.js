const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DeFiChain Knowledgebase",
  tagline: "",
  url: "https://defichain.com/de",
  baseUrl: "/DeFiChain-Wiki-2.0/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  organizationName: "0ptim",
  projectName: "DeFiChain-Wiki-2.0",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
          editUrl: "https://github.com/0ptim/DeFiChain-Wiki-2.0/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/0ptim/DeFiChain-Wiki-2.0/tree/main/",
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
      docs : {
        sidebar : {
          autoCollapseCategories : true
        }
      },
      navbar: {
        title: "My Site",
        logo: {
          alt: "DeFiChain Wiki Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/0ptim/DeFiChain-Wiki-2.0",
            label: "GitHub",
            position: "right",
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
                label: "GitHub (This knowledge base)",
                href: "https://github.com/0ptim/DeFiChain-Wiki-2.0",
              },
              {
                label: "GitHub (DeFiChain)",
                href: "https://github.com/DeFiCh",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DeFiChain Knowledgebase, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
