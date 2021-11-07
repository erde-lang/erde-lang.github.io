import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';
import { LiveCodeBlockProps } from './LiveCodeBlock';

export const LiveCodeBlock = (props: LiveCodeBlockProps) => (
  <BrowserOnly>
    {() => {
      const { LiveCodeBlock } = require('./LiveCodeBlock');
      return <LiveCodeBlock {...props} />;
    }}
  </BrowserOnly>
);
