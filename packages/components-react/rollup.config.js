import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import copy from 'rollup-plugin-copy'

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/index.js',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true
    }
  ],
  external: (id) => !/^(\.|\/)/.test(id),
  plugins: [
    resolve(),
    sourcemaps(),
    copy({
      targets: [
        { src: 'dist-transpiled/index.d.ts', dest: 'dist/' }
      ]
    })
  ]
};