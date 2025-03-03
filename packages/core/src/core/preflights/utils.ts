export function compressCSS(css: string) {
  return css.replace(/\s+/g, ' ').replace(/\/\*[\s\S]*?\*\//g, '');
}
