// @flow
import { TOGGLE_REVIEWED } from '../constants'
import type { Data as ToggleReviewedData } from '../modules/toggle-reviewed'

export type Action =
  {| type: typeof TOGGLE_REVIEWED, payload: ToggleReviewedData |}

export type Type = $PropertyType<Action, 'type'>
export type Payload = $PropertyType<Action, 'payload'>
