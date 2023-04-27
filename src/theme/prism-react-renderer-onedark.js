const palette = require('./onedark');

/**
 * Types derived from the following CSS rules:
 * https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css
 */
module.exports = {
  plain: {
    color: palette.white,
    backgroundColor: palette.black,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'cdata'],
      style: { color: '#5c6370' },
    },
    {
      types: ['doctype', 'punctuation', 'entity'],
      style: { color: palette.white },
    },
    {
      types: [
        'attr-name',
        'class-name',
        'boolean',
        'constant',
        'number',
        'atrule',
      ],
      style: { color: palette.yellow },
    },
    {
      types: ['keyword'],
      style: { color: palette.purple },
    },
    {
      types: ['property', 'tag', 'symbol', 'deleted', 'important'],
      style: { color: palette.red },
    },
    {
      types: [
        'selector',
        'string',
        'char',
        'builtin',
        'inserted',
        'regex',
        'attr-value',
      ],
      style: { color: palette.green },
    },
    {
      types: ['variable', 'operator', 'function'],
      style: { color: palette.blue },
    },
    {
      types: ['url'],
      style: { color: palette.cyan },
    },
  ],
};
