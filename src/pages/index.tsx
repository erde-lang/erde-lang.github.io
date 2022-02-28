import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import React from 'react';
import Logo from '../../static/logo.svg';
import styles from './index.module.scss';

export default () => (
  <Layout pageClassName={styles.page}>
    <Logo />
    <h1>Erde</h1>
    <p>
      Erde is a programming language that compiles to Lua. It was created with
      the intention of allowing for more expressive Lua code.
    </p>
    <CodeBlock
      children={`local map = (t, callback) -> {
  local tcopy = {}
  for key, value in ipairs(t) {
    t[key] = callback(value)
  }
  return tcopy
}

local printDoubles = t -> t
  >> map(n -> 2 * n)
  >> unpack()
  >> print()

printDoubles({ 1, 2, 3 }) -- prints: 2 4 6`}
    />
    <p>
      Many of Lua's keywords and quirks have been kept to ensure Erde is
      approachable for those coming from Lua and readable even for those who may
      not have much of an interest. For example, variables still use `local`,
      tables are still 1-index based, and negation still uses the `~` operator.
    </p>
    <CodeBlock
      children={`local x = { 'hello world!' }
if x[1] ~= nil {
  print(x[1])
}`}
    />
  </Layout>
);
