import useIsBrowser from '@docusaurus/useIsBrowser';
import { useEffect, useState } from 'react';

// NOTE: These should be synced w/ the breakpoints in scss/_breakpoints.scss
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};

const SORTED_BREAKPOINT_VALUES = Object.values(BREAKPOINTS).sort(
  (a, b) => a - b,
);

function getCurrentBreakpoint() {
  return (
    SORTED_BREAKPOINT_VALUES.find(
      breakpoint => window.innerWidth < breakpoint,
    ) ?? BREAKPOINTS.desktop
  );
}

export function useCurrentBreakpoint() {
  const isBrowser = useIsBrowser();
  const [currentBreakpoint, setCurrentBreakpoint] = useState(
    isBrowser ? getCurrentBreakpoint() : BREAKPOINTS.desktop,
  );

  useEffect(() => {
    if (isBrowser) {
      const onResize = () => void setCurrentBreakpoint(getCurrentBreakpoint());
      onResize();
      window.addEventListener('resize', onResize);
      return () => void window.removeEventListener('resize', onResize);
    }
  }, [isBrowser]);

  return currentBreakpoint;
}
