import BrowserOnly from '@docusaurus/BrowserOnly';
import { LiveCodeBlockCoreProps } from './LiveCodeBlockCore';

export const LiveCodeBlock = (props: LiveCodeBlockCoreProps) => (
  <BrowserOnly>
    {() => {
      const { LiveCodeBlockCore } = require('./LiveCodeBlockCore');
      return <LiveCodeBlockCore {...props} />;
    }}
  </BrowserOnly>
);
