// @flow
import { FILE_REGEX, TOGGLE_REVIEWED } from './constants'
import type { Action } from './actions/types'
import type { Tab } from './types'

const toggleReviewed: () => Action = () => ({
  type: TOGGLE_REVIEWED,
  payload: {
    regex: FILE_REGEX,
    reviewed: true,
  },
})

/**
 * Fired when a browser action icon is clicked. Does not fire if the browser
 * action has a popup.
 *
 * @docs https://developer.chrome.com/extensions/browserAction#event-onClicked
 */
chrome.browserAction.onClicked.addListener(function onClicked (tab: Tab): void {
  /**
   * Under some circumstances a tab may not be assigned an ID; for example,
   * when querying foreign tabs using the sessions API, in which case a session
   * ID may be present.
   *
   * @docs https://developer.chrome.com/extensions/tabs#type-Tab
   */
  const { id }: Tab = tab
  if (!id) return

  /**
   * Sends a single message to the content script(s) in the specified tab, with
   * an optional callback to run when a response is sent back. The
   * runtime.onMessage event is fired in each content script running in the
   * specified tab for the current extension.
   *
   * @docs https://developers.chrome.com/extensions/tabs#method-sendMessage
   */
  chrome.tabs.sendMessage(id, toggleReviewed())
})
