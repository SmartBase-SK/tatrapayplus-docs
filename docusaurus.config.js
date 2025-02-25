// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  // noIndex: true,
  title: "Tatrapay+ payment gateway",
  tagline: "Create the future of banking with us.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://smartbase-sk.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/tatrapayplus-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "smartbase-sk", // Usually your GitHub org/user name.
  projectName: "tatrapayplus-docs", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "sk"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          docItemComponent: "@theme/ApiItem",
          editUrl:
            "https://github.com/SmartBase-SK/tatrapayplus-docs/blob/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      /** @type {import('docusaurus-plugin-openapi-docs').OpenApiPlugin} */
      ({
        id: "api", // plugin id
        docsPluginId: "classic",
        config: {
          api: {
            specPath: "./tatrapayplus_api_sandbox.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      }),
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Tatrapay+",
        logo: {
          alt: "Tatrapay+ Logo",
          src: "img/logo.webp",
        },
        items: [
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            href: "/docs/libraries/node/v1/",
            label: "Guides",
          },
          {
            href: "/docs/api/tatrapayplus-api/",
            label: "API Reference",
          },
          {
            href: "https://github.com/SmartBase-SK/tatrapayplus-node",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guides",
                to: "/docs/libraries/node/v1",
              },
              {
                label: "API Reference",
                to: "/docs/api/tatrapayplus-api",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/SmartBase-SK/tatrapayplus-node",
              },
              {
                label: "Developer Portal",
                href: "https://developer.tatrabanka.sk/pages/devportal/sk/#/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Smartbase.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: "B6QCVQHQ3K",
        apiKey: "1720d9324957e8a6622cda395b772093",
        indexName: "smartbase-skio",
      },
      languageTabs: [
        {
          highlight: "javascript",
          language: "javascript",
          logoClass: "javascript",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
      ],
    }),
};

export default config;
