import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'dist/src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    strict: false,
  },
  plugins: [resolve(), json(), commonjs()],
  external: [
    'typescript-json-schema',
    'child_process',
    'fs',
    'path',
    'os',
    'https',
    'readline',
    'zlib',
    'events',
    'stream',
    'util',
    'buffer'
  ]
};