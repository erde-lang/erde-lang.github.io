// https://docusaurus.io/docs/configuration

const palenight = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Erde',
  favicon: 'logo.svg',

  url: 'https://erde-lang.github.io/',
  baseUrl: '/',

  projectName: 'erde',
  organizationName: 'erde-lang',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/styles.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      prism: { theme: palenight },
      navbar: {
        logo: {
          alt: 'site logo',
          src: 'logo.svg',
        },
        items: [
          {
            href: 'https://github.com/erde-lang/erde',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
    },
};
