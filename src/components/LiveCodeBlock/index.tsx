import BrowserOnly from '@docusaurus/BrowserOnly';
import { LiveCodeBlockCoreProps } from './LiveCodeBlockCore';

export const LiveCodeBlock = (props: LiveCodeBlockCoreProps) => (
  <BrowserOnly>
    {() => {
      // eslint-disable-next-line
      const { LiveCodeBlockCore } = require('./LiveCodeBlockCore');
      return <LiveCodeBlockCore {...props} />;
    }}
  </BrowserOnly>
);
