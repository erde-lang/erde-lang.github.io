import Layout from '@theme/Layout';
import React from 'react';
import { LiveCodeBlock } from '../components/LiveCodeBlock';
import styles from './playground.module.scss';

export default () => (
  <Layout pageClassName={styles.page}>
    <h1>Playground</h1>
    <LiveCodeBlock />
  </Layout>
);
