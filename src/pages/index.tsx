import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import Logo from '../../static/logo.svg';
import { BREAKPOINTS, useCurrentBreakpoint } from '../common/breakpoints';
import { LiveCodeBlock } from '../components/LiveCodeBlock';
import { Menu } from '../components/Menu';
import styles from './index.module.scss';

const FAQ: { question: ReactNode; answer: ReactNode }[] = [
  {
    question: 'Why not XXX (Moonscript / Fennel)?',
    answer: (
      <>
        Unfortunately neither <a href="https://moonscript.org">moonscript</a>{' '}
        nor <a href="https://fennel-lang.org">fennel</a> seemed like attractive
        options, as I'm not a huge fan of whitespace languages nor lisp. The
        other options seemed to be either unmaintained or lacking features I
        wanted.
      </>
    ),
  },
  {
    question: 'Why symbols over keywords?',
    answer: `
Many of the commonly used programming languages today tend to use symbols over
keywords (Rust, Golang, Javascript, etc). This is meant to make Erde more 
approachable for those coming from languages other than Lua. I personally also 
find symbols to be much more concise and readable (although this is extremely 
subjective).
`,
  },
  {
    question: 'Do I need Erde?',
    answer: `
Absolutely not. Lua is already an amazingly designed language. If you are only
using Lua lightly, then working with Erde will probably incur more overhead than
it's worth. However, if you are working with Lua a lot (or simply prefer the
syntax of Erde), then by all means feel free to try it out!
`,
  },
];

//
// Features
//

interface Feature {
  id: string;
  label: ReactNode;
  example: string;
}

const FEATURES: Feature[] = [
  {
    id: 'arrow-functions',
    label: 'Arrow functions',
    example: `
function map(t, callback) {
  local copy = {}

  for key, value in pairs(t) {
    copy[key] = callback(value)
  }

  return copy
}

local evens = { 2, 4, 6, 8, 10 }

local odds = map(evens, even -> {
  return even - 1
})

-- OR with implicit return shorthand
local odds = map(evens, even -> even - 1)
`,
  },
  {
    id: 'destructuring',
    label: 'Table destructuring',
    example: `
local myTable = {
  myValue = 5,
  'child1',
  'child2',
}

-- Normal destruct
local { myValue } = myTable

-- w/ array element destructs
local { myValue, [ firstChild, secondChild ] } = myTable

-- w/ only array destructs
local [ firstChild, secondChild ] = myTable
`,
  },
  {
    id: 'optional-chaining',
    label: 'Optional chaining',
    example: `
local nilTable = nil

print(nilTable?.test)
print(nilTable?[1])
print(nilTable?())

-- Optional chaining also works for assignments!
nilTable?.test = 'goodbye world'
print(nilTable?.test)

local myTable = { test = 'hello world' }

print(myTable?.test)

myTable?.test = 'goodbye world'
print(myTable?.test)
`,
  },
  {
    id: 'assignment-ops',
    label: 'Assignment operators',
    example: `
local a = 1
print(a)
a += 1
print(a)
a *= 5
print(a)
`,
  },
  {
    id: 'param-defaults',
    label: 'Parameter defaults',
    example: `
function greet(message = 'hello world') {
  print(message)
}

greet()
greet('goodbye world')
`,
  },
  {
    id: 'continue',
    label: (
      <>
        <code>continue</code> keyword
      </>
    ),
    example: `
function printOdds(...) {
  for _, value in ipairs({ ... }) {
    if value % 2 == 0 {
      continue
    }

    print(value)
  }
}

printOdds(1, 2, 3, 4, 5)
`,
  },
  {
    id: 'interpolation',
    label: 'String interpolation',
    example: `
local myValue = 4

-- Can interpolate any string
print('myValue is {myValue}')
print("myValue is {myValue}")
print([[myValue is {myValue}]])

-- Can escape braces for literal print
print('A literal brace: \\{')
`,
  },
  {
    id: 'do-expressions',
    label: 'do expressions',
    example: `
local myVar = do {
  local tmpVar = 4
  return tmpVar + 3
}

print(myVar)
print(tmpVar)
`,
  },
  {
    id: 'try-catch',
    label: 'Try catch statement',
    example: `
try {
  print(1 / "hello")
} catch (err) {
  print('Caught: ', err)
}
`,
  },
];

const Features = () => {
  const currentBreakpoint = useCurrentBreakpoint();
  const [selectedId, setSelectedId] = useState(FEATURES[0].id);
  const selectedFeature = FEATURES.find(({ id }) => id === selectedId);

  return currentBreakpoint < BREAKPOINTS.laptop ? (
    <section className={classNames(styles.features, styles.mobile)}>
      <h2>Features</h2>
      <ul>
        {FEATURES.map(feature => (
          <li key={feature.id}>{feature.label}</li>
        ))}
        <li>and more!</li>
      </ul>
    </section>
  ) : (
    <section className={classNames(styles.features, styles.laptop)}>
      <div className={styles.featureList}>
        <h2>Features</h2>
        <Menu
          className={styles.menu}
          selectedItemId={selectedId}
          onChange={id => void setSelectedId(id)}
          items={FEATURES.map(feature => ({
            id: feature.id,
            label: feature.label,
          }))}
        />
        <div>and more!</div>
      </div>
      <div className={styles.codeBlockContainer}>
        <LiveCodeBlock
          className={styles.codeBlock}
          code={selectedFeature?.example.trim()}
          layout="vertical"
        />
      </div>
    </section>
  );
};

//
// Index
//

export default () => (
  <Layout pageClassName={styles.index}>
    <header>
      <Logo />
      <h1>Erde</h1>
      <p>A modern Lua dialect</p>
    </header>
    <main>
      <section>
        Erde is an expressive programming language that compiles to Lua.
        Syntactically it favors symbols over keywords and adds support for many
        features commonly found in other programming languages that Lua
        otherwise sacrifices for simplicity.
      </section>
      <section>
        During development, Erde files may also be either run through the CLI or
        even loaded directly into Lua scripts using{' '}
        <code>require('erde.loader')</code>. In both cases, the files will be
        dynamically compiled as they are loaded.
      </section>
      <section className={styles.goals}>
        <h2>Goals</h2>
        <ul>
          <li>
            Provide an expressive syntax while maintaining a low cognitive
            overhead when switching between Lua and Erde.
          </li>
          <li>
            Generate performant Lua 5.1+ compatible code, with optimizations for
            targeted versions.
          </li>
          <li>
            Provide native tooling support for better developer experience.
          </li>
        </ul>
      </section>
      <Features />
      <section className={styles.installation}>
        <h2>Installation</h2>
        <p>
          The recommended way to install is through{' '}
          <a href="https://luarocks.org">luarocks</a>:
        </p>
        <CodeBlock language="bash" children="luarocks install erde" />
        <p>
          Alternatively you can clone the{' '}
          <a href="https://github.com/erde-lang/erde">repo</a> and update your{' '}
          PATH and <a href="https://www.lua.org/pil/8.1.html">LUA_PATH</a>{' '}
          accordingly.
        </p>
        <p>You can check whether Erde is installed correctly by running:</p>
        <CodeBlock
          className={styles.codeBlock}
          language="bash"
          children="erde -v"
        />
      </section>
      <section className={styles.faq}>
        <h2>FAQ</h2>
        {FAQ.map((faq, i) => (
          <div key={i}>
            <h3>{faq.question}</h3>
            <p>
              {typeof faq.answer === 'string' ? faq.answer.trim() : faq.answer}
            </p>
          </div>
        ))}
      </section>
    </main>
  </Layout>
);
