// @flow
import { DIST_PATH } from './constants'
import path from 'path-browserify'

export const dist = (relative: ?string): string =>
  path.join(DIST_PATH, relative || '/')

export const paths = {
  dist,
}

export default paths
