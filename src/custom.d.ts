declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module fengari-web {
  function load(src: string, chunk: string): () => void;
}
