import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';

import postcss from 'rollup-plugin-postcss';

// PostCSS plugins
import postcssCustomProperties from 'postcss-custom-properties';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

import packageJson from './package.json';

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'xt-ui-kit-react-lib',
      },
      {
        name: 'xt-ui-kit-react-lib',
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        extract: false,
        modules: true,
        plugins: [
          postcssCustomProperties({
            preserve: true,
            importFrom: './src/css_variables/css_variables.css',
          }),
          postcssPresetEnv(),
          cssnano(),
        ],
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        exclude: ['node_modules/**', '../../node_modules/**'],
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
