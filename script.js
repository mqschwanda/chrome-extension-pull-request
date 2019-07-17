// this is the code which will be injected into a given page...

(function() {

	const forEachEl = (elements, forEach) =>
		Array.reverse(Array.from(elements)).forEach(forEach)

	const forFirstEl = (elements, forEach) =>
		forEach(Array.from(elements)[0])

	const files = document.getElementsByClassName('file-info')

	forEachEl(files, file => {
		const anchors = file.getElementsByTagName('A')

		forEachEl(anchors, anchor => {
			const ignore = /^dist|.snap$/.test(anchor.text)

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

})()
