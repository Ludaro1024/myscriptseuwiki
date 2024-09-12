// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyScripts Wiki',
  tagline: 'FiveM Quality Scripts!',
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
      navbar: {
        title: 'MyScripts Wiki',
        logo: {
          alt: 'Wiki',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/Ludaro1024/ludaro-wiki-ger/blob/main/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      {
        type: 'localeDropdown',
        position: 'right',
        dropdownItemsAfter: [
          {
            type: 'html',
            value: '<hr style="margin: 0.3rem 0;">',
          },
          {
            href: 'https://github.com/Ludaro1024/ludaro-wiki-ger/i18n/',
            label: 'Help me Translate!',
          },
          ],
        },
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} MyScripts.eu.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Important Links:',
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/N4Br9HDy",
            },
            {
              label: "Shop"
              href: "https://myscripts.eu"
            }
           
          ],
        },
      ],
      logo: {
        alt: 'Myscripts logo',
        src: 'img/logo.png',
        className: 'footer-logo',
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        width: 100,
        height: 100,
      },
      copyright: `Copyright © ${new Date().getFullYear()} MyScripts, written with ❤️ for you with Docusaurus`,
    },
    prism: {
      additionalLanguages: ['powershell', 'lua', 'php', 'csharp', 'css', 'javascript', 'sql', 'json', 'git', 'diff'],
      theme: darkCodeTheme
    },
};

module.exports = config;
