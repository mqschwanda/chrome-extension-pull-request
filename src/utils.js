// @flow
import {
  each,
  filter,
  head,
  includes,
  isEqual,
  toArray,
} from 'lodash-es'

export {
  toArray,
  each,
  head,
  filter,
  isEqual,
  includes,
}

export function forEachEl<T> (
  elements: HTMLCollection<T>,
  callback: (T) => *
): * {
  return each(toArray(elements), callback)
}

export function forFirstEl<T> (
  elements: HTMLCollection<T>,
  callback: (T) => *
): * {
  return each(toArray(elements), callback)
}

export function includesClassName<T> (
  elements: HTMLCollection<T>,
  className: string
): HTMLCollection<T> {
  return filter(elements, ({ className: classNames }) => includes(classNames, className))
}
