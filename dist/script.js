'use strict';

const FILE_REGEX = /^dist|.snap$/;

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

const forEachEl = (elements, forEach) =>
		Array.from(elements).forEach(forEach);

const forFirstEl = (elements, forEach) =>
	forEach(Array.from(elements)[0]);

// this is the code which will be injected into a given page...

const handleClick = () => {

	const files = document.getElementsByClassName('file-info');

	forEachEl(files, file => {
		const anchors = file.getElementsByTagName('A');

		forEachEl(anchors, anchor => {
			const ignore = FILE_REGEX.test(anchor.text);

			if (ignore) {
				const buttons = file.parentNode.getElementsByClassName('js-reviewed-toggle');

				forFirstEl(buttons, button => {
					const checkboxs = button.getElementsByClassName('js-reviewed-checkbox');

					forFirstEl(checkboxs, checkbox => {
						if (checkbox.checked !== true) {
							button.click();
						}
					});
				});
			}
		});
	});

};

(function() {
	handleClick();
})();
