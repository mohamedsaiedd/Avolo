

export  function fetchData(issueKey,prefs) {
    chrome.storage.local.set({'taskId': issueKey})
    
    console.log('prefsfetchData', prefs);
    let ticketUrl = `https://mohamedsaiedfathallah.atlassian.net/rest/api/3/issue/${issueKey}` 
    fetch(ticketUrl, {
        mode: 'no-cors',
        headers: {Authorization: 'Bearer {ATATT3xFfGF0z8k_HbTWhnno43LJop6lJH0Ry-G6kmrO9LR7gPmtJBep4G5urrtPvZRp2vT_KSbJaYLw8mLxbDJPjoW3af419R_7t0Z05_Q2axCbpDccO1yZeUw-FdLR2ZorkQCTNThCZTOF4Sk3-1l5u9Y5KvovnB2in6_25kPk0GFv7U_hdgo=355EA0AC}',}
        
    }).then(resp => resp.json())
    .then(json => {
                let description = json.fields.description.content[0].content[0].text
                let label = json.fields.summary
                
                chrome.storage.local.set({'description': description})
                chrome.storage.local.set({'modifiedDescription': description})
                chrome.storage.local.set({'label': label})
                chrome.storage.local.set({'modifiedLabel': label})
            }
            ) 
          
}

export function setTaskElement(prefs) {
    chrome.storage.local.set({'element': prefs.taskElement })
    
    console.log('seData', prefs);
    
}



export function generateData(prefs) {

    console.log('prefsGenrateData', prefs);

    let gptServer = 'http://localhost:8000/avolo' 
    if (prefs.taskElement == "label") {
        
    fetch(gptServer, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify({
            body: `rephrase this text ${prefs.modifiedLabel}`
        })
        
    }).then(resp => resp.json())
    .then(json =>{ 

            prefs.modifiedLabel = json.text
            chrome.storage.local.set({'modifiedLabel': json.text})
          
    }).then(()=> {
        console.log('fetched modifiedLabel');
    })
}else {

    fetch(gptServer, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify({
            body: `rephrase this text ${prefs.modifiedDescription}`
        })
        
    }).then(resp => resp.json())
    .then(json =>{ 

        prefs.modifiedDescription = json.text
        chrome.storage.local.set({'modifiedDescription': json.text})

    }).then(()=> {
        console.log('fetched modifiedDescription');
    })
}
}
    



export function updateData(issueKey ,prefs) {
    console.log('prefsUpdateData', prefs);
    let ticketUrl = `https://mohamedsaiedfathallah.atlassian.net/rest/api/3/issue/${issueKey}`
    
   fetch(ticketUrl, {
     method: 'PUT',
     headers: {Authorization: 'Bearer {ATATT3xFfGF0z8k_HbTWhnno43LJop6lJH0Ry-G6kmrO9LR7gPmtJBep4G5urrtPvZRp2vT_KSbJaYLw8mLxbDJPjoW3af419R_7t0Z05_Q2axCbpDccO1yZeUw-FdLR2ZorkQCTNThCZTOF4Sk3-1l5u9Y5KvovnB2in6_25kPk0GFv7U_hdgo=355EA0AC}',
     'Content-Type': 'application/json' ,
   },
     body: JSON.stringify({
       "update": {
         "summary" : [{"set" : `${prefs.label}`}],
    },
    "fields": {
        "description": {
            "version": 1,
            "type": "doc",
            "content": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": `${prefs.description}`
                        }
                    ]
                }
            ]
        }
    }
     })
    
   }).then(resp => resp.json())
   .then(function (){
    chrome.storage.local.set({'modifiedLabel': prefs.modifiedLabel})
    chrome.storage.local.set({'modifiedDescription': prefs.modifiedDescription})
    
})

}


// const currentIssueKey = window.location.issueKey.split('/').pop();
// console.log(ticketUrl);


     