// // (() => {
// //   let youtubeLeftControls, youtubePlayer;
// //   let currentVideo = "";
// //   let currentVideoBookmarks = [];

// //   const fetchBookmarks = () => {
// //     return new Promise((resolve) => {
// //       chrome.storage.sync.get([currentVideo], (obj) => {
// //         resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
// //       });
// //     });
// //   };

// //   const addNewBookmarkEventHandler = async () => {
// //     const currentTime = youtubePlayer.currentTime;
// //     const newBookmark = {
// //       time: currentTime,
// //       desc: "Bookmark at " + getTime(currentTime),
// //     };

// //     currentVideoBookmarks = await fetchBookmarks();

// //     chrome.storage.sync.set({
// //       [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
// //     });
// //   };

// //   const newVideoLoaded = async () => {
// //     const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];

// //     currentVideoBookmarks = await fetchBookmarks();

// //     if (!bookmarkBtnExists) {
// //       const bookmarkBtn = document.createElement("img");

// //       bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
// //       bookmarkBtn.className = "ytp-button " + "bookmark-btn";
// //       bookmarkBtn.title = "Click to bookmark current timestamp";

// //       youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
// //       youtubePlayer = document.getElementsByClassName('video-stream')[0];

// //       youtubeLeftControls.appendChild(bookmarkBtn);
// //       bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
// //     }
// //   };
// // console.log("opened");

// //   chrome.runtime.onMessage.addListener((msg , sender, response) => {
// //     if ( msg.command == "openModal") {
// //       console.log("opened");
// //       document.querySelector("#modal").show()
// //     }
// //     return true
// //   });

// // alert('Hello, world!')


// // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
// //   switch (request.type){
// //     case "openModal":
// //       $('#modal').modal({
// //              backdrop: 'static',
// //              keyboard: false
// //           });
// //           console.log("22");

// //           break;  
// // }})


// // chrome.runtime.onInstalled.addListener(() => {
// //   // Page actions are disabled by default and enabled on select tabs
// //   chrome.action.disable();

// //   // Clear all rules to ensure only our expected rules are set
// //   chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
// //     // Declare a rule to enable the action on example.com pages
// //     let exampleRule = {
// //       conditions: [
// //         new chrome.declarativeContent.PageStateMatcher({
// //           pageUrl: {hostSuffix: '.example.com'},
// //         })
// //       ],
// //       actions: [new chrome.declarativeContent.ShowAction()],
// //     };

// //     // Finally, apply our new array of rules
// //     let rules = [exampleRule];
// //     chrome.declarativeContent.onPageChanged.addRules(rules);
// //   });
// // });

// //   chrome.runtime.onMessage.addListener(( obj, sender, response) => {
// //     const { type, value, videoId } = obj;
// //     if (type === "NEW") {
// //       currentVideo = videoId;
// //       newVideoLoaded();
// //     } else if (type === "PLAY") {
// //       youtubePlayer.currentTime = value;
// //     } else if ( type === "DELETE") {
// //       currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
// //       chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });

// //       response(currentVideoBookmarks);
// //     }
// //   });

// //   newVideoLoaded();
// // })();

// // const getTime = t => {
// //   var date = new Date(0);
// //   date.setSeconds(t);

// //   return date.toISOString().substr(11, 8);
// // };
// // console.log("hello");

// // 
// // get method
// const currentIssueKey = window.location.pathname.split('/').pop();
// console.log(currentIssueKey);
// let ticketUrl = `https://mohamedsaiedfathallah.atlassian.net/rest/api/3/issue/${currentIssueKey}` 
// // let boardUrl = `https://mohamedsaiedfathallah.atlassian.net/rest/api/3/issue/${currentIssueKey}` 
// // let issueKey = `https://mohamedsaiedfathallah.atlassian.net/rest/api/3/issue/${currentIssueKey}` 
  



// fetch(ticketUrl, {
//   mode: 'no-cors',
//   headers: {Authorization: 'Bearer {ATATT3xFfGF0z8k_HbTWhnno43LJop6lJH0Ry-G6kmrO9LR7gPmtJBep4G5urrtPvZRp2vT_KSbJaYLw8mLxbDJPjoW3af419R_7t0Z05_Q2axCbpDccO1yZeUw-FdLR2ZorkQCTNThCZTOF4Sk3-1l5u9Y5KvovnB2in6_25kPk0GFv7U_hdgo=355EA0AC}',}
  
  
// })
//    .then(json => {
//      let label = json.fields.summary
//      console.log(label);
//      let description = json.fields.description.content[0].content[0].text
//     //  console.log(description);
//         localStorage.setItem("label", label);
//         chrome.storage.local.set({'label': label})
//         localStorage.setItem("description", description);
//         document.getElementById('header').innerHTML =  chrome.storage.local.get('pausedCount')
//         document.getElementById('exampleFormControlTextarea1').innerHTML = localStorage.getItem('description')


//     }
//    )
   
   
//    fetch(ticketUrl, {
//      method: 'PUT',
//      // mode: 'no-cors',
//      headers: {Authorization: 'Bearer {ATATT3xFfGF0z8k_HbTWhnno43LJop6lJH0Ry-G6kmrO9LR7gPmtJBep4G5urrtPvZRp2vT_KSbJaYLw8mLxbDJPjoW3af419R_7t0Z05_Q2axCbpDccO1yZeUw-FdLR2ZorkQCTNThCZTOF4Sk3-1l5u9Y5KvovnB2in6_25kPk0GFv7U_hdgo=355EA0AC}',
//      'Content-Type': 'application/json' ,
//    },
//      body: JSON.stringify({
//        "update": {
//          "summary" : [{"set" : `Hello from the key ${currentIssueKey}`}],
//          "labels":   [{"add" : `${currentIssueKey}`}],
//        }
//      })
    
//    })
//       .then(resp => resp.json())
   
//       .then(resp => resp.json())


// console.log(chrome.storage.local.get('label')); 


// document.getElementById('header').innerHTML  =  chrome.storage.local.get('label')
// document.getElementById('exampleFormControlTextarea1').innerHTML  =  chrome.storage.local.get('description')





// const placeholderElement = document.getElementById('placeholder');

//         console.log('fetched again');
//         placeholderElement.style.display = 'flex';






// Create the element to append
const init = function name() {
    
    const newElement = document.createElement("iframe");
    newElement.textContent = "Appended Element";
    newElement.id = "Appended";
    newElement.src = "chrome-extension://ehboffoiipaejejnenhmnfdomdknfnho/popup.html";
    newElement.style.backgroundColor = "#3498db";
    newElement.style.color = "#fff";
    newElement.style.padding = "10px";


    
    
    // Append the element to the body of the web page
    document.body.appendChild(newElement);
}
init()


        const draggableItem = document.getElementById('Appended');
        let offsetX, offsetY;
        let isDragging = false;

        draggableItem.addEventListener('mousedown', (event) => {
        isDragging = true;

        // Calculate the offset from the mouse pointer to the top-left corner of the element
        offsetX = event.clientX - draggableItem.getBoundingClientRect().left;
        offsetY = event.clientY - draggableItem.getBoundingClientRect().top;

        // Set cursor to indicate dragging
        draggableItem.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            // Calculate new position based on mouse movement
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;

            // Set the new position
            draggableItem.style.left = `${x}px`;
            draggableItem.style.top = `${y}px`;
        }
        });

        document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;

            // Set cursor back to default
            draggableItem.style.cursor = 'grab';
        }
        });
