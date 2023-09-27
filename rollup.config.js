import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'lib/index.js', // Your main entry point
  output: [
    {
      file: 'dist/bundle.cjs',
      format: 'cjs', // CommonJS for Node.js
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm', // ES module for browsers
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser(), // Minify the output
  ],
}
