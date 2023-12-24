
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

import {fetchData , updateData , generateData ,setTaskElement , generateTestCases} from "./apifetch.js";

try {
  chrome.runtime.onMessage.addListener(function (res , sender) {
    const {message , prefs , pathname } = res
    console.log('sender',sender);
    console.log('prefs',prefs);
   
      
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
      if (message === 'generateTestCases'){
        generateTestCases(prefs)
       
      }
      
  });
    
 
} catch (e) {
  console.log(e);
}

// let user_signed_in = false;
// const CLIENT_ID = encodeURIComponent("4VVMHTl4BsyF2ieRqQ9lXN2ak4g6WrAq");
// const RESPONSE_TYPE =  encodeURIComponent("id_tocken");
// const REDIRECT_URI = encodeURIComponent("chrome-extension://ehboffoiipaejejnenhmnfdomdknfnho/popup.html");
// const STATE = "";
// const SCOPE = "";
// const PROMP = "";





// chrome.runtime.onMessage.addListener(function (request , sender) {  
//   if(request.message === 'signIn ') {
//     if(is_user_signed_in()){
//       console.log('user is signed in ');
//     }
//   } else if ( request.message === 'logout') {
  
//   } else if (request.message === 'signedIn' ) {

//   }
//  })




chrome.runtime.onInstalled.addListener(function () {
  // Clear any stored token when the extension is installed or updated
  chrome.storage.local.remove(['oauth_token']);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'handleOAuthRedirect') {
    // Handle the OAuth redirect here
    const redirectUrl = request.redirectUrl;
    // Extract tokens or information from the URL, and save them to storage
    // For example, you might use a library like URLSearchParams or a regex
    const accessToken = extractAccessToken(redirectUrl);

    if (accessToken) {
      // Save the token to storage (you might want to use a more secure storage)
      chrome.storage.local.set({ 'oauth_token': accessToken }, function () {
        console.log('Access token saved:', accessToken);
      });
    }

    // Close the popup or redirect the user to another page
    chrome.tabs.update(sender.tab.id, { url: 'popup-closed.html' });
  }
});

function extractAccessToken(redirectUrl) {
  // Implement logic to extract the access token from the redirect URL
  // This might involve using URLSearchParams or a regex
  // Return the extracted access token
  return 'example-access-token';
}




// chrome.contextMenus.onClicked.addListener(function (clickData) {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//    chrome.tabs.sendMessage(tabs[0].id, {type: "modal"});
//   });
// });






