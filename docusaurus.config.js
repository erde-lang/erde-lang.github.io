// https://docusaurus.io/docs/configuration

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
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

  plugins: [
    'docusaurus-plugin-sass',
    () => ({
      name: 'monaco-editor',
      configureWebpack: () => ({
        plugins: [new MonacoWebpackPlugin()],
      }),
    }),
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: './src/docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          path: './src/blog',
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/theme.scss'),
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
            href: '/docs',
            label: 'Docs',
            position: 'left',
          },
          {
            href: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: '/playground',
            label: 'Playground',
            position: 'left',
          },
          {
            href: 'https://github.com/erde-lang/erde',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
    },
};