import babel from 'rollup-plugin-babel';

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
  ],
};
