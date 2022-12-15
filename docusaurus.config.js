const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DeFiChainWiki",
  url: "https://www.defichainwiki.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/Favicon.ico",

  // GitHub pages deployment config.
  organizationName: "0ptim",
  projectName: "DeFiChainWiki",
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
          editUrl: "https://github.com/0ptim/DeFiChainWiki/tree/main/",
          editLocalizedFiles: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-1RQ320FPE8",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "improve_the_wiki",
        content:
          'We are looking for community members which help improve our wiki. <a href="/docs/auto/Sharing_is_caring">Read more</a>',
        backgroundColor: "#00F6FF",
        textColor: "#091E42",
        isCloseable: true,
      },
      image: "img/Open_Graph_Image.png",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "DeFiChainWiki",
        logo: {
          src: "img/logo.svg",
          alt: "DeFiChain Wiki Logo",
        },
        items: [
          {
            type: "doc",
            docId: "/category/fundamentals",
            label: "📖 Fundamentals",
          },
          {
            type: "doc",
            docId: "auto/Ecosystem",
            label: "🧭 Ecosystem",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/0ptim/DeFiChainWiki",
            position: "right",
            className: "header-icon-link header-icon-github",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://t.me/+xNgu9LTrGApiZjFk",
            position: "right",
            className: "header-icon-link header-icon-telegram",
            "aria-label": "Telegram group",
          },
          {
            type: "search",
            position: "right",
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
                href: "https://github.com/0ptim/DeFiChainWiki",
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
        logo: {
          alt: "DeFiChain logo",
          src: "img/footer-banner.svg",
          href: "https://defichain.com/",
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        apiKey: "00a233bca9e11e8baf6f03174dd7ebb5",
        indexName: "defichain_wiki",
        contextualSearch: true,
        appId: "8RV2QHX307",
        searchParameters: {},
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        name: "pink", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/DeFiCh/pinkpaper/main/emission/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/auto/remote", // the base directory to output to.
        documents: ["README.md"], // the file names to download
        noRuntimeDownloads: true,
      },
    ],
  ],
};

module.exports = config;
