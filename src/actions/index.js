// @flow
import { ACTIONS, TOGGLE_REVIEWED } from '../constants'
import { join } from '../utils'
import toggleReviewed from '../modules/toggle-reviewed'
import type { Action } from './types'

export default function actions (action: Action): void {
  const { type, payload }: Action = action

  switch (type) {
    case TOGGLE_REVIEWED:
      toggleReviewed(payload)
      break
    default:
      console.warn(`no action found for \`${type}\`. Expected one of ${join(ACTIONS, ', ')}.`, {
        type,
        payload,
      })
      break
  }
}
