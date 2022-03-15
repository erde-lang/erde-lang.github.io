import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import Logo from '../../static/logo.svg';
import styles from './index.module.scss';

const FEATURE_LIST = [
  {
    label: 'Assignment operators (+=, *=, etc)',
    lua: 'a = a + 1',
    erde: 'a += 1',
  },
  { label: 'Function parameter defaults' },
  { label: 'Named varargs' },
  { label: 'continue keyword' },
  { label: 'String interpolation' },
  { label: 'Arrow functions' },
  { label: 'Table destructuring' },
  { label: 'Optional chaining' },
  { label: 'do expressions' },
  { label: 'Ternary operator' },
  { label: 'Null coalescing operator' },
  { label: 'Spread operator' },
  { label: 'Try catch statement' },
];

const Features = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <section className={styles.features}>
      <CodeBlock children={'test'} />
      <div>
        <h2>Features</h2>
        <ul>
          {FEATURE_LIST.map(feature => (
            <li>{feature.label}</li>
          ))}
          <li>And more!</li>
        </ul>
      </div>
    </section>
  );
};

export default () => (
  <Layout pageClassName={styles.index}>
    <header>
      <Logo />
      <h1>Erde</h1>
      <p>A modern Lua dialect</p>
    </header>
    <main>
      <p>
        Erde is an expressive programming language that compiles to Lua.
        Syntactically it favors symbols over keywords and adds support for many
        features commonly found in other programming languages that Lua
        otherwise sacrifices for simplicity.
      </p>
      <Features />
      <button className={styles.getStarted}>
        <h3>Get Started</h3>
      </button>
    </main>
  </Layout>
);
