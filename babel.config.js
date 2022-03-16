module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    // https://github.com/facebook/docusaurus/issues/5978
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
