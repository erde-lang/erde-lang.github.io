module.exports = {
  title: 'Erde',
  favicon: 'logo.svg',
  organizationName: 'erde-lang',
  projectName: 'erde',
  url: 'https://erde-lang.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'script',
      attributes: {
        src: '/fengari-web.js',
        type: 'text/javascript',
      },
    },
    {
      tagName: 'script',
      attributes: {
        src: '/erde-preload.lua',
        type: 'application/lua',
        async: 'true',
      },
    },
  ],

  plugins: [
    [
      '@docusaurus/theme-classic',
      { customCss: require.resolve('./src/custom.scss') },
    ],
    [
      'content-docs',
      {
        path: './src/docs',
        routeBasePath: '/',
        breadcrumbs: false,
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    'docusaurus-plugin-sass',
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-sitemap',
  ],

  themeConfig: {
    prism: { theme: require('./src/theme/prism-react-renderer-onedark.js') },
    navbar: {
      title: 'Erde',
      logo: {
        alt: 'Erde Logo',
        src: 'logo.svg',
      },
      items: [
        {
          to: 'changelog',
          label: '1.0.0-1',
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
