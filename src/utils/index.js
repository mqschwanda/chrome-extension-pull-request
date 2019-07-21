// @flow
import {
  each,
  filter,
  includes,
  isEqual,
  join,
} from 'lodash-es'

export {
  each,
  filter,
  isEqual,
  includes,
  join,
}

// exectue callback for each html element in collection
export function forEachEl<T> (
  elements: HTMLCollection<T>,
  callback: (T) => *,
): * {
  return each([...elements], callback)
}

// exectue callback for first html element in collection
export function forFirstEl<T> (
  elements: HTMLCollection<T>,
  callback: (T) => *,
): * {
  const [element]: Array<T> = [...elements]
  return element && callback(element)
}

// filter a list of html elements based on the presence of a given classname
export function includesClassName<T> (
  elements: HTMLCollection<T>,
  className: string,
): HTMLCollection<T> {
  return filter(elements, ({ classList }) => includes(classList, className))
}
