import { converter, formatHex, interpolate } from 'culori';

const toOklch = converter('oklch');

const tokens = {
  primary: {
    lighter: toOklch('#e7f6ff'),
    light: toOklch('#ceedff'),
    base: toOklch('#0aa3ff'),
    dark: toOklch('#0772b3'),
  },
  neutral: {
    text: toOklch('#f3f4f6'), // 100
    muted: toOklch('#8a8fa3'), // 500
    surface: toOklch('#1f2433'), // 800
    bg: toOklch('#01010c'), // 950
  },
  semantics: {
    success: toOklch('#00c588'),
    error: toOklch('#ff0000'),
    warning: toOklch('#ffcc00'),
    info: toOklch('#409891'),
  },
};

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function generateScale(anchors) {
  const scaleInterpolator = interpolate(anchors, 'oklch');

  return STEPS.reduce((acc, step, index) => {
    // t exactly matches our 0.0 to 1.0 offsets
    const t = index / (STEPS.length - 1);
    const colorObj = scaleInterpolator(t);

    const l = (colorObj.l * 100).toFixed(2);
    const c = Math.max(0, colorObj.c || 0).toFixed(3);
    const h = (colorObj.h || 0).toFixed(2);

    const hex = formatHex({ mode: 'oklch', l: colorObj.l, c: colorObj.c, h: colorObj.h });

    acc[step] = `oklch(${l}% ${c} ${h}), /* ${hex} */`;
    return acc;
  }, {} as Record<number, string>);
}

const theme = {
  primary: generateScale([
    { offset: 0.0, ...tokens.primary.lighter }, // 50
    { offset: 0.2, ...tokens.primary.light }, // 200
    { offset: 0.5, ...tokens.primary.base }, // 500
    { offset: 0.7, ...tokens.primary.dark }, // 700
    { offset: 1.0, l: 0.15, c: 0.05, h: tokens.primary.base.h }, // 950 (Tapered dark)
  ]),

  neutral: generateScale([
    { offset: 0.0, l: 0.98, c: 0.005, h: tokens.primary.base.h }, // 50 (Ghost)
    { offset: 0.1, ...tokens.neutral.text, h: tokens.primary.base.h }, // 100
    { offset: 0.5, ...tokens.neutral.muted, h: tokens.primary.base.h }, // 500
    { offset: 0.8, ...tokens.neutral.surface, h: tokens.primary.base.h }, // 800
    { offset: 1.0, ...tokens.neutral.bg, h: tokens.primary.base.h }, // 950
  ]),

  // Helper for semantics: Uses token at 500, borrows light/dark logic from primary
  createSemantic: (token) => generateScale([
    { offset: 0.0, l: 0.97, c: 0.02, h: token.h }, // 50
    { offset: 0.5, ...token }, // 500
    { offset: 1.0, l: 0.20, c: 0.05, h: token.h }, // 950
  ]),
};

// Generate Semantic Scales
theme.success = theme.createSemantic(tokens.semantics.success);
theme.error = theme.createSemantic(tokens.semantics.error);
theme.warning = theme.createSemantic(tokens.semantics.warning);
theme.info = theme.createSemantic(tokens.semantics.info);

console.log(theme);
