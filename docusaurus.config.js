// https://docusaurus.io/docs/configuration

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

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: './src/docs',
          routeBasePath: '/',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/theme/custom.scss'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: 'Erde',
        hideOnScroll: true,
        logo: {
          alt: 'Erde Logo',
          src: 'logo.svg',
        },
        items: [
          {
            to: 'changelog',
            label: '0.5.0-1',
            position: 'left',
            className: 'erde-version',
          },
          {
            href: 'https://github.com/erde-lang/erde',
            position: 'right',
            className: 'github-logo',
          },
        ],
      },
    },
};
