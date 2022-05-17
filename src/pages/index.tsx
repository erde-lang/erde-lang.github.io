import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import Logo from '../../static/logo.svg';
import { BREAKPOINTS, useCurrentBreakpoint } from '../common/breakpoints';
import { Menu } from '../components/Menu';
import styles from './index.module.scss';

const FAQ: { question: ReactNode; answer: ReactNode }[] = [
  {
    question: 'Why not XXX (Moonscript / Fennel)?',
    answer: (
      <>
        Unfortunately neither <a href="https://moonscript.org">moonscript</a>{' '}
        nor <a href="https://fennel-lang.org">fennel</a> seemed like attractive
        options, as I&apos;m not a huge fan of whitespace languages nor lisp.
        The other options seemed to be either unmaintained or lacking features I
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
// Examples
//

interface Example {
  id: string;
  label: ReactNode;
  code: string;
}

const EXAMPLES: Example[] = [
  {
    id: 'arrow-functions',
    label: 'Arrow functions',
    code: `
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
    code: `
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
    code: `
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
    code: `
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
    code: `
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
    code: `
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
    code: `
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
    code: `
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
    code: `
try {
  print(1 / "hello")
} catch (err) {
  print('Caught: ', err)
}
`,
  },
];

const Examples = () => {
  const currentBreakpoint = useCurrentBreakpoint();
  const [selectedExample, setSelectedExample] = useState(EXAMPLES[0]);

  return currentBreakpoint < BREAKPOINTS.laptop ? (
    <section className={classNames(styles.examples, styles.mobile)}>
      <h2>Examples</h2>
      <ul>
        {EXAMPLES.map(example => (
          <li key={example.id}>{example.label}</li>
        ))}
      </ul>
    </section>
  ) : (
    <section className={classNames(styles.examples, styles.laptop)}>
      <div className={styles.exampleMenu}>
        <h2>Examples</h2>
        <Menu
          className={styles.menu}
          value={selectedExample}
          onChange={setSelectedExample}
          items={EXAMPLES}
        />
      </div>
      <CodeBlock
        className={styles.codeBlock}
        language="erde"
        children={selectedExample.code.trim()}
        showLineNumbers
      />
    </section>
  );
};

//
// Index
//

export default () => (
  <Layout wrapperClassName={styles.index}>
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
        Erde may be either compiled to lua, run on the command line, or loaded
        directly into Lua scripts using{' '}
        <code>require(&apos;erde.loader&apos;)</code>.
      </section>
      <Examples />
      <section className={styles.installation}>
        <h2>Installation</h2>
        <p>
          The recommended way to install is through{' '}
          <a href="https://luarocks.org/modules/bsuth/erde">luarocks</a>:
        </p>
        <CodeBlock language="bash" children="luarocks install erde" />
        <p>
          Alternatively you can clone the{' '}
          <a href="https://github.com/erde-lang/erde">repo</a> and update your{' '}
          PATH and <a href="https://www.lua.org/pil/8.1.html">LUA_PATH</a>{' '}
          accordingly:
        </p>
        <CodeBlock
          language="bash"
          children={[
            'git clone https://github.com/erde-lang/erde.git',
            'ERDE_ROOT="$(pwd)/erde"',
            'export LUA_PATH="$ERDE_ROOT/?/init.lua;$LUA_PATH"',
            'export PATH="$ERDE_ROOT/bin:$PATH"',
          ].join('\n')}
        />
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
