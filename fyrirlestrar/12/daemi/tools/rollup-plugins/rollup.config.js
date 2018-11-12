import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      sourceMaps: true,
      presets: [
        ['@babel/preset-env', { targets: '> 0.25%, not dead' }],
      ],
    }),
    uglify(),
  ],
};
