const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Notes for Semester 6',
  tagline: 'Be thankful!',
  url: 'https://utsavbalar-semester6.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'UtsavBalar1231',
  projectName: 'docusaurus-semester6',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Semester 6 by UtsavBalar',
        logo: {
          alt: 'Logo here',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Structure',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/UtsavBalar1231',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Structure',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/_cat_daddy1231/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UtsavTheCunt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/UtsavTheCunt',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UtsavBalar1231',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UtsavBalar<br>Built with Docusaurus `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
