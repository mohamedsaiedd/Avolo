
// chrome.tabs.onUpdated.addListener(async(tabId, tab) => {
//   if (tab.url && tab.url.includes("atlassian.net")) {
   
//     // Enables the side panel on all other sites
//     await chrome.sidePanel.setOptions({
//       tabId,
//       path: 'sidepanel.html',
//       enabled: true
//     });
//   } else {
//     // Disables the side panel on all other sites
//     await chrome.sidePanel.setOptions({
//       tabId,
//       enabled: false
//     });

//   }
// });

import {fetchData , updateData , generateData ,setTaskElement} from "./apifetch.js";

try {
  chrome.runtime.onMessage.addListener(function (res , sender) {
    const {message , prefs , pathname ,fullPath } = res
    console.log('sender',sender);
    console.log('prefs',prefs);
    // if(fullPath.includes('atlassian.net')){
      
      if (message === 'updateData') {
        updateData(pathname ,prefs);
      }
      if (message === 'getData') {
        fetchData(pathname ,prefs);
      }
      if (message === 'generateData'){
        generateData(prefs)
      
      }
      if (message === 'setTaskElement'){
        setTaskElement(prefs)
      
      }
      
      
  });
    
 
} catch (e) {
  console.log(e);
}

// chrome.runtime.onMessage.addListener(function (message, sender,response) {
//   if (message === 'fetched') {
//         console.log('fetched yes');
//     }
// })



// chrome.contextMenus.onClicked.addListener(function (clickData) {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//    chrome.tabs.sendMessage(tabs[0].id, {type: "modal"});
//   });
// });



