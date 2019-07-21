// @flow
import actions from '../actions'

/**
 * Fired when a message is sent from either an extension process (by
 * runtime.sendMessage) or a content script (by tabs.sendMessage).
 *
 * @docs https://developers.chrome.com/extensions/runtime#event-onMessage
 */
chrome.runtime.onMessage.addListener(function onMessage (
  message: *,
  sender: *,
  callback: () => void,
): void {
  actions(message)
})
