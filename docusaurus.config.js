// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyScripts Wiki',
  tagline: 'FiveM Quality!',
  url: 'https://wiki.myscripts.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ludaro1024', // Usually your GitHub org/user name.
  projectName: 'myscriptseuwiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en']
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
  
          // routeBasePath: '/', // Set this value to '/'.
          editUrl: ({locale, docPath}) => {
            if (locale !== "de") {
              return `https://github.com/Ludaro1024/myscriptseuwiki/tree/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            
            return `https://github.com/Ludaro1024/myscriptseuwiki/blob/main/docs/${docPath}`;
          },
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
      // navbar: {
      //   title: 'My Site',
      //   logo: {
      //     alt: 'My Site Logo',
      //     src: 'img/logo.svg',
      //   },
      //   items: [
      //     {
      //       type: 'doc',
      //       docId: 'intro',
      //       position: 'left',
      //       label: 'Tutorial',
      //     },
      //     {to: '/blog', label: 'Blog', position: 'left'},
      //     {
      //       href: 'https://github.com/facebook/docusaurus',
      //       label: 'GitHub',
      //       position: 'right',
      //     },
      //   ],
      // },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} MyScripts.eu.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
