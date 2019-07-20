// @flow
import {
  BUTTON_CLASS_NAME,
  CHECKBOX_CLASS_NAME,
  FILE_REGEX,
} from './constants'
import {
  forEachEl,
  forFirstEl,
  includesClassName,
  isEqual,
} from './utils'
import type {
  Anchor,
  Anchors,
  Buttons,
  Checkbox,
  Checkboxes,
  Element,
  Elements,
} from './types'

type Props = {|
  regex: RegExp,
  reviewed: boolean,
|}

type ToggleReviewed = (Props) => void

const toggleReviewed: ToggleReviewed = ({
  regex,
  reviewed,
}: Props) => {
  const files: Elements = document.getElementsByClassName('file-info')

  forEachEl(files, file => {
    const { parentElement }: Element = file
    if (!parentElement) return

    const anchors: Anchors = file.getElementsByTagName('a')

    forEachEl(anchors, anchor => {
      const { text }: Anchor = anchor
      const match: boolean = regex.test(text)

      if (match) {
        const buttons: Buttons = parentElement.getElementsByTagName('button')
        const reviewedButtons: Buttons = includesClassName(buttons, BUTTON_CLASS_NAME)

        forFirstEl(reviewedButtons, button => {
          const checkboxes: Checkboxes = button.getElementsByTagName('input')
          const reviewedCheckboxes: Checkboxes = includesClassName(checkboxes, CHECKBOX_CLASS_NAME)

          forFirstEl(reviewedCheckboxes, checkbox => {
            const { checked }: Checkbox = checkbox
            if (!isEqual(checked, reviewed)) {
              button.click()
              checkbox.checked = reviewed
            }
          })
        })
      }
    })
  })
}

(function () {
  toggleReviewed({
    regex: FILE_REGEX,
    reviewed: true,
  })
})()
