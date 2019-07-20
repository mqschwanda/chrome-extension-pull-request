
const babel = {
  include: 'node_modules/**',
  plugins: [
    ['lodash', { id: ['async', 'lodash-bound'] }],
  ],
  presets: [
    ['@babel/env', { targets: { node: 6 } }],
  ],
}

export default babel
