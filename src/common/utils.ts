import { useState } from 'react';

export function useRerender() {
  const [, rerender] = useState({});
  return () => void rerender({});
}

export function observeResize(node: HTMLElement, onResize: () => void) {
  if (ResizeObserver) {
    const observer = new ResizeObserver(onResize);
    observer.observe(node);
    return () => observer.unobserve(node);
  } else {
    // Fallback to MutationObserver/window resize if ResizeObserver is not
    // supported. Note that this approach has a lot of flaws. For example,
    // this stackoverflow comment:
    //
    // "MutationObserver does not observe width change caused by css class.
    // Although class change itself can be observed, classes that affect an
    // element's size may be added to elements other than the observed element
    // itself."
    //
    // https://stackoverflow.com/questions/29909400/is-there-a-event-invoked-when-a-blocks-width-changes
    window.addEventListener('resize', onResize);

    const observer = new MutationObserver(onResize);
    observer.observe(node, {
      attributes: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  }
}
