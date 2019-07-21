import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import babelConfig from './babel.config'
import commonjs from 'rollup-plugin-commonjs'
import flow from 'rollup-plugin-flow'
import prettier from 'rollup-plugin-prettier'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  flow({ all: true }),
  resolve(),
  commonjs({
    include: 'node_modules/**',
  }),
  babel(babelConfig),
  prettier({
    tabWidth: 2,
    singleQuote: true,
  }),
  /**
  * NOTE: Any function used in terser's options object cannot rely on its
  * surrounding scope, since it is executed in an isolated context.
  *
  * @options https://github.com/terser-js/terser#minify-options
  */
  // terser({
  //   parse: {
  //     // parse options
  //   },
  //   compress: {
  //     // compress options
  //   },
  //   mangle: {
  //     // mangle options
  //     properties: {
  //       // mangle property options
  //     },
  //   },
  //   output: {
  //     // output options
  //   },
  //   sourcemap: {
  //     // source map options
  //   },
  //   ecma: 8, // specify one of: 5, 6, 7 or 8
  //   keep_classnames: false,
  //   keep_fnames: false,
  //   ie8: false,
  //   module: false,
  //   nameCache: null, // or specify a name cache object
  //   safari10: false,
  //   toplevel: false,
  //   warnings: false,
  // }),
]

const format = 'esm'

const index = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format,
  },
  plugins,
}

const script = {
  input: 'src/script.js',
  output: {
    file: 'dist/script.js',
    format,
  },
  plugins,
}

export default [
  index,
  script,
]
