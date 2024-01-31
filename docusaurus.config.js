// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config()

const customFields = require('./src/customFields')

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'pzhine-docs',
  tagline: '',
  url: process.env.DOCUSAURUS_URL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pzhine', // Usually your GitHub org/user name.
  projectName: 'pzhine-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: 'sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'pzhine docs',
        // logo: {
        //   alt: 'Elysium Logo',
        //   src: 'img/elysium-logo-light.png',
        // },
        // items: [
        //   {
        //     position: 'right',
        //     to: '/docs/guide',
        //     label: 'Docs',
        //     items: [
        //       {
        //         to: '/docs/guide',
        //         label: 'Introduction',
        //         activeBaseRegex: '/docs/guide$',
        //       },
        //       {
        //         to: '/docs/guide/getting-started',
        //         label: 'Getting Started',
        //       },
        //       {
        //         to: '/docs/guide/reference',
        //         label: 'Reference',
        //       },
        //     ],
        //   },
        //   {
        //     position: 'right',
        //     to: '/docs/pricing',
        //     label: 'Pricing',
        //   },
        //   {
        //     position: 'right',
        //     label: 'Support',
        //     to: '/docs/support',
        //     items: [
        //       {
        //         to: '/docs/support',
        //         label: 'Contact us',
        //       },
        //       {
        //         to: '/docs/support/faq',
        //         label: 'FAQ',
        //       },
        //       // {
        //       //   to: '/docs/support',
        //       //   label: 'Community',
        //       //   activeBaseRegex: '/docs/support$'
        //       // },
        //     ],
        //   },
        //   {
        //     label: 'Discord',
        //     href: 'https://discord.gg/gYMKNYHJRJ',
        //     position: 'right',
        //   },
        //   {
        //     href: customFields.iosAppUrl,
        //     label: 'Download Elysium on the App Store',
        //     position: 'right',
        //     className: 'nav-link_download-app-store',
        //   },
        // ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Product',
        //     items: [
        //       {
        //         label: 'Pricing',
        //         to: '/docs/pricing',
        //       },
        //       {
        //         label: 'Docs',
        //         to: '/docs/guide',
        //       },
        //       {
        //         label: 'Support',
        //         to: '/docs/support',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Discord',
        //         href: 'https://discord.gg/gYMKNYHJRJ',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/elysiumXR',
        //       },
        //       {
        //         label: 'Instagram',
        //         href: 'https://www.instagram.com/mythologi.es/',
        //       },
        //       {
        //         label: 'YouTube',
        //         href: 'https://www.youtube.com/channel/UCDC0xji3cOyUDBVSryyHh3Q',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Privacy Policy',
        //         href: '/docs/policies/privacy',
        //       },
        //       {
        //         label: 'Press kit',
        //         href: '/docs/press',
        //       },
        //     ],
        //   },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} MYTHOLOGI Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            from: '/docs',
            to: '/docs/guide/',
          },
        ],
      },
    ],
    async function docusaurusTailwindCss() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
        configureWebpack(config) {
          return {
            resolve: {
              ...(config.resolve ?? {}),
              fallback: {
                fs: false,
                tls: false,
                net: false,
                path: false,
                zlib: false,
                http: false,
                https: false,
                stream: false,
                crypto: false,
                os: false,
                vm: false,
                util: false,
                url: false,
              },
            },
          }
        },
      }
    },
  ],
}
