import cssnano from 'cssnano';
import fg from 'fast-glob';
import { getPackageInfoSync } from 'local-pkg';
import fs from 'node:fs';
import path, { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let stylesStr = '';

async function appendAnimateCss() {
  const animateRootPath = getPackageInfoSync('animate.css')!.rootPath;
  const animateFilePaths = fg.sync(['source/*/*.css'], { cwd: animateRootPath }).map((path) => {
    return resolve(animateRootPath, path);
  });

  let animStr = '';

  for (const animatePath of animateFilePaths) {
    const code = fs.readFileSync(animatePath, 'utf-8');

    animStr += code;
  }

  // @ts-expect-error lazy to type
  const minifyRes = await postcss([cssnano]).process(animStr, {
    from: undefined,
  });

  stylesStr += minifyRes.css;
}

function appendMagicAnimate() {
  const input = path.resolve(__dirname, '../node_modules/magic.css/dist/magic.min.css');

  const code = fs.readFileSync(input, 'utf-8');

  stylesStr += code;
}

async function run() {
  await appendAnimateCss();
  appendMagicAnimate();

  fs.writeFileSync(
    resolve(__dirname, '../src/data/animate.data.ts'),
    `export default \`${stylesStr}\`;\n`,
    { encoding: 'utf-8' },
  );
}

run();
