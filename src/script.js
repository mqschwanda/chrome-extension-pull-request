// this is the code which will be injected into a given page...
import { FILE_REGEX } from './constants'
import { forEachEl, forFirstEl } from './utils'

const handleClick = () => {

	const files = document.getElementsByClassName('file-info')

	forEachEl(files, file => {
		const anchors = file.getElementsByTagName('A')

		forEachEl(anchors, anchor => {
			const ignore = FILE_REGEX.test(anchor.text)

			if (ignore) {
				const buttons = file.parentNode.getElementsByClassName('js-reviewed-toggle')

				forFirstEl(buttons, button => {
					const checkboxs = button.getElementsByClassName('js-reviewed-checkbox')

					forFirstEl(checkboxs, checkbox => {
						if (checkbox.checked !== true) {
							button.click()
						}
					})
				})
			}
		})
	})

}

(function() {
	handleClick()
})()
