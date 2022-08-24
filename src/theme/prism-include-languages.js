// Ejected script to inject Erde PrismJS support.
//
// https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages

const PRISM_COMMON = {
  comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
  scope: { pattern: /\b(?:local)\b/, alias: 'class-name' },
  keyword:
    /\b(?:break|do|else|elseif|for|function|goto|if|in|nil|repeat|return|until|while)\b/,
  boolean: /\b(?:false|true)\b/,
  number:
    /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  operator: { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: true }, // Match ".." but don't break "..."
  punctuation: /[[\](){},;]|\.+|:+/,
};

// Fork Lua's PrismJS component to be more consistent w/ Erde
const PRISM_LUA = {
  ...PRISM_COMMON,
  keyword: [PRISM_COMMON.keyword, /\b(?:and|end|not|or|then)\b/],
  operator: [PRISM_COMMON.operator, /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/],
  function: { pattern: /(?!\d)\w+(?=\s*(?:[({]))/, greedy: true },
  // \z may be used to skip the following space
  string: {
    pattern:
      /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
    greedy: true,
  },
};

// TODO: Make MR to PrismJS to add Erde?
const PRISM_ERDE = {
  ...PRISM_COMMON,
  scope: [PRISM_COMMON.scope, /\b(?:global|module)\b/],
  keyword: [PRISM_COMMON.keyword, /\b(?:catch|continue|try)\b/],
  operator: [PRISM_COMMON.operator, /[-+*%^&|#/<>=~!]/],
  punctuation: [PRISM_COMMON.punctuation, { pattern: /=>|->/ }],
  function: { pattern: /(?!\d)\w+(?=\s*(?:[(]))/, greedy: true },
  'single-quote-string': {
    pattern: /'(?:(?!')[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*'/,
    alias: 'string',
    greedy: true,
  },
};

const PRISM_ERDE_INTERPOLATION = {
  pattern: /((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
  lookbehind: true,
  inside: {
    'interpolation-punctuation': {
      pattern: /^\{|\}$/,
      alias: 'punctuation',
    },
    rest: PRISM_ERDE,
  },
};

const PRISM_ERDE_INTERPOLATION_STRINGS = {
  'double-quote-string': {
    pattern: /"(?:(?!")[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*"/,
    greedy: true,
    inside: {
      interpolation: PRISM_ERDE_INTERPOLATION,
      string: /^"|([\s\S])+|"$/,
    },
  },
  'long-string': {
    pattern: /\[(=*)\[[\s\S]*?\]\1\]/,
    greedy: true,
    inside: {
      interpolation: PRISM_ERDE_INTERPOLATION,
      string: /^\[(=*)\[|([\s\S])+|\](=*)\]$/,
    },
  },
};

export default function prismIncludeLanguages(PrismObject) {
  // Prism components work on the Prism instance on the window, while prism-
  // react-renderer uses its own Prism instance. We temporarily mount the
  // instance onto window, import components to enhance it, then remove it to
  // avoid polluting global namespace.
  // You can mutate PrismObject: registering plugins, deleting languages... As
  // long as you don't re-assign it
  globalThis.Prism = PrismObject;

  require('prismjs/components/prism-bash');
  PrismObject.languages.lua = PRISM_LUA;
  PrismObject.languages.erde = PRISM_ERDE;

  // Interpolation strings must come before punctuation in order for long
  // strings to match '['
  PrismObject.languages.insertBefore(
    'erde',
    'punctuation',
    PRISM_ERDE_INTERPOLATION_STRINGS,
  );

  delete globalThis.Prism;
}
