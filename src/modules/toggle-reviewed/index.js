// @flow
import {
  CHECKBOX_CLASS_NAME,
  LABEL_CLASS_NAME,
} from '../../constants'
import {
  forEachEl,
  forFirstEl,
  includesClassName,
  isEqual,
} from '../../utils'
import type {
  Anchor,
  Anchors,
  Checkbox,
  Checkboxes,
  Element,
  Elements,
  Labels,
} from '../../types'

export type Data = {|
  regex: string,
  reviewed: boolean,
|}

export default function toggleReviewed ({
  regex: regexString,
  reviewed,
}: Data): void {
  const regex: RegExp = new RegExp(regexString)
  const files: Elements = document.getElementsByClassName('file-info')

  forEachEl(files, file => {
    const { parentElement }: Element = file
    if (!parentElement) return

    const anchors: Anchors = file.getElementsByTagName('a')

    forEachEl(anchors, anchor => {
      const { text }: Anchor = anchor
      const match: boolean = regex.test(text)

      if (match) {
        const labels: Labels = parentElement.getElementsByTagName('label')
        const reviewedLabels: Labels = includesClassName(
          labels,
          LABEL_CLASS_NAME,
        )

        forFirstEl(reviewedLabels, label => {
          const checkboxes: Checkboxes = label.getElementsByTagName('input')
          const reviewedCheckboxes: Checkboxes = includesClassName(
            checkboxes,
            CHECKBOX_CLASS_NAME,
          )

          forFirstEl(reviewedCheckboxes, checkbox => {
            const { checked }: Checkbox = checkbox
            if (!isEqual(checked, reviewed)) {
              checkbox.click()
              checkbox.checked = reviewed
            }
          })
        })
      }
    })
  })
}
