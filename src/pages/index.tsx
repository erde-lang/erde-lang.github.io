import Layout from '@theme/Layout';
import { useState } from 'react';
import Logo from '../../static/logo.svg';
import { BREAKPOINTS, useCurrentBreakpoint } from '../common/breakpoints';
import { LiveCodeBlock } from '../components/LiveCodeBlock';
import { Menu } from '../components/Menu';
import styles from './index.module.scss';

interface Feature {
  id: string;
  label: string;
  example: string;
}

const FEATURES: Feature[] = [
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
    label: 'Function parameter defaults',
    example: `
  function greet(message = 'hello world') {
    print(message)
  }

  greet()
  greet('goodbye world')
`,
  },
  {
    id: 'named-varargs',
    label: 'Named varargs',
    example: '',
  },
  {
    id: 'continue',
    label: 'continue keyword',
    example: '',
  },
  {
    id: 'interpolation',
    label: 'String interpolation',
    example: '',
  },
  {
    id: 'arrow-functions',
    label: 'Arrow functions',
    example: '',
  },
  {
    id: 'destructuring',
    label: 'Table destructuring',
    example: '',
  },
  {
    id: 'optional-chaining',
    label: 'Optional chaining',
    example: '',
  },
  {
    id: 'do-expressions',
    label: 'do expressions',
    example: '',
  },
  {
    id: 'ternary',
    label: 'Ternary operator',
    example: '',
  },
  {
    id: 'null-coalesce',
    label: 'Null coalescing operator',
    example: '',
  },
  {
    id: 'spread',
    label: 'Spread operator',
    example: '',
  },
  {
    id: 'try-catch',
    label: 'Try catch statement',
    example: '',
  },
];

const Features = () => {
  const currentBreakpoint = useCurrentBreakpoint();
  const [selectedId, setSelectedId] = useState(FEATURES[0].id);
  const selectedFeature = FEATURES.find(({ id }) => id === selectedId);

  return currentBreakpoint < BREAKPOINTS.laptop ? (
    <section className={styles.mobileFeatures}>
      <h2>Features</h2>
      <ul>
        {FEATURES.map(feature => (
          <li key={feature.id}>{feature.label}</li>
        ))}
        <li>and more!</li>
      </ul>
    </section>
  ) : (
    <section className={styles.features}>
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
          // TODO: fix trim hack
          code={selectedFeature?.example.trim()}
          layout="vertical"
        />
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
    </main>
  </Layout>
);
