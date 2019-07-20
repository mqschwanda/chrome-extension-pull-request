// @flow

/**
 * this is the background code...
 */

import paths from './paths'

// listen for our browserAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  // for the current tab, inject the `script.js` file & execute it
  chrome.tabs.executeScript(tab.ib, {
    file: paths.dist('script.js'),
  })
})
