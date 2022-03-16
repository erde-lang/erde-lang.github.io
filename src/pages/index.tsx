import Layout from '@theme/Layout';
import classNames from 'classnames';
import React, { useState } from 'react';
import { LiveCodeBlock } from '../components/LiveCodeBlock';
import Logo from '../../static/logo.svg';
import styles from './index.module.scss';

const FEATURE_LIST = [
  {
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
    label: 'Function parameter defaults',
    example: `
  function greet(message = 'hello world') {
    print(message)
  }

  greet()
  greet('goodbye world')
`,
  },
  { label: 'Named varargs', example: '' },
  { label: 'continue keyword', example: '' },
  { label: 'String interpolation', example: '' },
  { label: 'Arrow functions', example: '' },
  { label: 'Table destructuring', example: '' },
  { label: 'Optional chaining', example: '' },
  { label: 'do expressions', example: '' },
  { label: 'Ternary operator', example: '' },
  { label: 'Null coalescing operator', example: '' },
  { label: 'Spread operator', example: '' },
  { label: 'Try catch statement', example: '' },
];

const FeatureList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedFeature = FEATURE_LIST[selectedIndex];

  return (
    <section className={styles.featureList}>
      <LiveCodeBlock
        className={styles.codeBlock}
        code={selectedFeature.example.trim()}
      />
      <div>
        <h2>Features</h2>
        <ul className={styles.features}>
          {FEATURE_LIST.map((feature, i) => (
            <li
              key={feature.label}
              className={classNames(i === selectedIndex && styles.selected)}
              children={feature.label}
              onClick={() => void setSelectedIndex(i)}
            />
          ))}
        </ul>
        <div>And more!</div>
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
      <FeatureList />
    </main>
  </Layout>
);
