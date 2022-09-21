const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DeFiChain-Wiki",
  url: "https://0ptim.github.io",
  baseUrl: "/DeFiChain-Wiki/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/Favicon.ico",

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
      announcementBar: {
        id: 'improve_the_wiki',
        content:
          'We are looking for community members which help improve our wiki. <a href="/DeFiChain-Wiki/docs/auto/Sharing_is_caring">Read more</a>',
        backgroundColor: '#00F6FF',
        textColor: '#091E42',
        isCloseable: true,
        
      },
      image: 'img/Open_Graph_Image.png',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "DeFiChain-Wiki",
        logo: {
          alt: "DeFiChain Wiki Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "auto/welcome",
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
            title: "Main Sources",
            items: [
              {
                label: "Main Website",
                href: "https://defichain.com/",
              },
              {
                label: "Explorer",
                href: "https://defiscan.live/",
              },
              {
                label: "Blog",
                href: "https://blog.defichain.com/",
              },
              {
                label: "Newsletter",
                href: "https://c5ba029c.sibforms.com/serve/MUIEADS1VD9jeTSbGfIUoyPsNa3KLu71UW5xxDPwaHGfiveQ7kVjoZcEhKCVBzwP_2bI77gCYOv6Q3BRc2r9AASyyF8RAAF-8f8pc__eJ5-oFdMATZ2LY_S56oug5cPWpT58oVBcsqf3Pr_gmOkCXmiiUewbvX9tMvgFU-50rwv-vJ5H7tzmg5OAUvBuHS76cQJZAHv0wSIUefYJ",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/defichain",
              },
              {
                label: "Reddit",
                href: "https://reddit.com/r/defiblockchain/",
              },
              {
                label: "Telegram",
                href: "docs/auto/FAQ#legit-telegram-channels",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/DeFiChain",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/py55egyaGy",
              },
              {
                label: "Facebook",
                href: "https://facebook.com/defichain.official",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/defichain/",
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
                href: "https://defichain.com/privacy-policy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DeFiChain`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true
      },
      algolia: {
        apiKey: "00a233bca9e11e8baf6f03174dd7ebb5",
        indexName: "defichain_wiki",
        contextualSearch: true,
        appId: "8RV2QHX307",
        searchParameters: {},
      },
    }),
};

module.exports = config;
