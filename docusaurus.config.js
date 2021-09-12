// https://docusaurus.io/docs/configuration

const palenight = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Erde',
  url: '/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'erde-lang',
  projectName: 'erde',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./src/sidebars.js'),
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
        title: 'Erde',
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
