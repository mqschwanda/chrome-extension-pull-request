
const presets = [
  ['@babel/env', {
    targets: {
      chrome: 33,
    },
  }],
  '@babel/preset-flow',
]

const plugins = [
  ['lodash', {
    id: ['async', 'lodash-bound'],
  }],
]

const babel = {
  include: 'node_modules/**',
  plugins,
  presets,
}

export default babel
