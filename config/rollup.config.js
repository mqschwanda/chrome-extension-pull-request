import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import babelConfig from './babel.config'
import commonjs from 'rollup-plugin-commonjs'
import flow from 'rollup-plugin-flow'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  flow({ all: true }),
  babel(babelConfig),
  resolve(),
  commonjs({
    include: 'node_modules/**',
  }),
  terser(),
]

const script = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins,
}

const index = {
  input: 'src/script.js',
  output: {
    file: 'dist/script.js',
    format: 'cjs',
  },
  plugins,
}

export default [
  script,
  index,
]
