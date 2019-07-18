/**
 * Gets the first element of `array`.
 *
 * @since 0.0.1
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
export const head = (array) =>
  (array != null && array.length)
    ? array[0]
    : undefined

export const forEachEl = (elements, forEach) =>
		Array.from(elements).forEach(forEach)

export const forFirstEl = (elements, forEach) =>
	forEach(head(Array.from(elements)))
