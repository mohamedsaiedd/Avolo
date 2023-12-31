// localStorage.setItem("label", 'label');
// document.getElementById('header').innerHTML = localStorage.getItem('label') 
// document.getElementById('exampleFormControlTextarea1').innerHTML = localStorage.getItem('description')



// // const currentIssueKey = window.location.pathname.split('/').pop();
// let ticketUrl = `https://mohamedsaiedfathallah.atlassian.net/rest/api/3/issue/DEMO-1` 
// console.log(ticketUrl);


// fetch(ticketUrl, {
//     mode: 'no-cors',
//     headers: {Authorization: 'Bearer {ATATT3xFfGF0z8k_HbTWhnno43LJop6lJH0Ry-G6kmrO9LR7gPmtJBep4G5urrtPvZRp2vT_KSbJaYLw8mLxbDJPjoW3af419R_7t0Z05_Q2axCbpDccO1yZeUw-FdLR2ZorkQCTNThCZTOF4Sk3-1l5u9Y5KvovnB2in6_25kPk0GFv7U_hdgo=355EA0AC}',}
    
//   })
//      .then(data => {
//        console.log( data);
//     //    let description = json.fields
//       //  console.log(description);
//         //   localStorage.setItem("label", label);
//         //   chrome.storage.local.set({'label': label})
//         //   localStorage.setItem("description", description);
//         //   document.getElementById('header').innerHTML =  chrome.storage.local.get('pausedCount')
//         //   document.getElementById('exampleFormControlTextarea1').innerHTML = localStorage.getItem('description')
  
  
//       }
    //  )
     
    
    
    // elements
    let labelElement = document.getElementById('header')
    let taskIdElement = document.getElementById('taskId')
    let modifiedLabelElement = document.getElementById('modifiedHeader')
    let descriptionElement = document.getElementById('textArea')
    let modifiedDescriptionElement = document.getElementById('modifiedTextArea')
    let acceptanceCriteriaElement = document.getElementById('acceptance_c')
    let modifiedAcceptanceCriteriaElement = document.getElementById('modifiedAcceptance_c')
    let generatedTestCasesElement = document.getElementById('generatedTestCases')
    let page404 = document.getElementById('error404')

    //wrapers
    let descriptionWrap = document.querySelector('.textArea')
    let labelWrap = document.querySelector('.header')
    let modifiedLabelWrap = document.querySelector('.modifiedHeader')
    let modifiedDescriptionWrap = document.querySelector('.modifiedTextArea')
    let generatedTestCasesWrap = document.querySelector('.generatedTestCases')
    let acceptance_cWrap = document.querySelector('.acceptance_c')
    let modifiedAcceptance_cWrap = document.querySelector('.modifiedAcceptance_c')
    

    // btns
    let refreshBtn = document.getElementById('refresh')
    let updateBtn = document.getElementById('Update')
    let rephraseBtn = document.getElementById('Rephrase')
    let generateTestsBtn = document.getElementById('generateTests')
    let taskElementValue = document.getElementById('taskElement')

    const placeholderElement = document.getElementById('placeholder');
    


    function getContent() { 
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const currentTab = tabs[0];
            const pathname = new URL(currentTab.url).pathname;
            const currentIssueKey = pathname.split('/').pop();

            const prefs = {
                label : labelElement.value,
                taskId : taskIdElement.value,
                description : descriptionElement.value,
                acceptanceCriteria : acceptanceCriteriaElement.value,
                modifiedLabel : modifiedLabelElement.value,
                modifiedDescription : modifiedDescriptionElement.value,
                modifiedAcceptanceCriteria : modifiedAcceptanceCriteriaElement.value,
                taskElement :  taskElementValue.value
            }

            if(currentTab.url.includes('atlassian.net')){
                console.log('jira site');
                chrome.runtime.sendMessage({ message: 'getData', pathname: currentIssueKey , prefs });
            }else {
                console.log('not jira site')
                page404.style.display = 'flex';
            }

        });
        
    }

    function updateContent() {
        
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const currentTab = tabs[0];
            const pathname = new URL(currentTab.url).pathname;
            const currentIssueKey = pathname.split('/').pop();

            const prefs = {
                label : modifiedLabelElement.value,
                taskId : taskIdElement.value,
                description : modifiedDescriptionElement.value,
                acceptanceCriteria : modifiedAcceptanceCriteriaElement.value,
                modifiedLabel : modifiedLabelElement.value,
                modifiedDescription : modifiedDescriptionElement.value,
                modifiedAcceptanceCriteria : modifiedAcceptanceCriteriaElement.value,
                taskElement :  taskElementValue.value
            }

            chrome.runtime.sendMessage({ message: 'updateData', pathname: currentIssueKey , prefs });
        });

    }





    // https://mohamedsaiedfathallah.atlassian.net/plugins/servlet/oauth/authorize?client_id=BsUf9ODq0gHoZ1FnwpmIZpMfITW8g40Z&redirect_uri=https%3A%2F%2Fehboffoiipaejejnenhmnfdomdknfnho.chromiumapp.org%2Foauth%2Fcallback&scope=read%20write&response_type=token




//     document.getElementById('startOAuthFlow').addEventListener('click', function () {

//     // Replace these values with your actual OAuth credentials and Jira configuration
//     const clientId = 'yeZcQMkCUJa7XICQ2gf1sPpcsuYmEm0M';
//     const redirectUri = chrome.identity.getRedirectURL('oauth-callback.html'); // Ensure this matches your extension's manifest
//     const scope = 'read write'; // Adjust based on the permissions your extension needs

//     // Construct the authorization URL
//     const authUrlWithParams = `https://mohamedsaiedfathallah.atlassian.net/plugins/servlet/oauth/authorize` +
//     `?client_id=${clientId}` +
//     `&redirect_uri=${encodeURIComponent(redirectUri)}` +
//     `&scope=${encodeURIComponent(scope)}` +
//     `&response_type=token`;

//     // Use the authorization URL in your extension's code
//     console.log('Authorization URL:', authUrlWithParams);

//     // Example: Open the URL in a new tab
//     chrome.tabs.create({ url: authUrlWithParams });
// });

    function contentGetter() {
        chrome.storage.local.get(['label', 'description' , 'modifiedLabel' , 'generatedTestCases'  , 'modifiedDescription' , 'taskId' , 'acceptanceCriteria' , 'modifiedAcceptanceCriteria' , 'element' ], (result)=> {
            const { label , description , modifiedLabel , modifiedDescription ,taskId  ,element , generatedTestCases ,acceptanceCriteria , modifiedAcceptanceCriteria} = result;
            labelElement.value = label
            modifiedLabelElement.value = modifiedLabel
            descriptionElement.value = description
            modifiedDescriptionElement.value = modifiedDescription 
            acceptanceCriteriaElement.value = acceptanceCriteria
            modifiedAcceptanceCriteriaElement.value = modifiedAcceptanceCriteria
            taskIdElement.innerHTML = taskId
            taskElementValue.value =  element 
            generatedTestCasesElement.value = generatedTestCases

        })
    }

    function contentRephrase () {

        const prefs = {
            label : labelElement.value,
            description : descriptionElement.value,
            acceptanceCriteria : acceptanceCriteriaElement.value,
            modifiedLabel : modifiedLabelElement.value,
            modifiedDescription : modifiedDescriptionElement.value,
            modifiedAcceptanceCriteria : modifiedAcceptanceCriteriaElement.value,
            taskElement :  taskElementValue.value
        }
        chrome.runtime.sendMessage({ message: 'generateData' , prefs})
    }

    function generateTestCases () {

        const prefs = {
            label : labelElement.value,
            description : descriptionElement.value,
            modifiedLabel : modifiedLabelElement.value,
            modifiedDescription : modifiedDescriptionElement.value,
            modifiedAcceptanceCriteria : modifiedAcceptanceCriteriaElement.value,
            taskElement :  taskElementValue.value,
            generatedTestCases :  generatedTestCasesElement.value,
            
        }
        chrome.runtime.sendMessage({ message: 'generateTestCases' , prefs})
    }

    

    acceptance_cWrap.style.display = 'none';
    modifiedAcceptance_cWrap.style.display = 'none';
    labelWrap.style.display = 'block';
    modifiedLabelWrap.style.display = 'block';
    descriptionWrap.style.display = 'none';
    modifiedDescriptionWrap.style.display = 'none';
    generatedTestCasesWrap.style.display = 'none';


    taskElementValue.onchange =()=> {
        const prefs = {
                label : labelElement.value,
                taskId : taskIdElement.value,
                description : descriptionElement.value,
                acceptanceCriteria : acceptanceCriteriaElement.value,
                modifiedLabel : modifiedLabelElement.value,
                modifiedDescription : modifiedDescriptionElement.value,
                modifiedAcceptanceCriteria : modifiedAcceptanceCriteriaElement.value,
                taskElement :  taskElementValue.value
        }
        chrome.runtime.sendMessage({ message: 'setTaskElement' , prefs})

        if (taskElementValue.value == "label") {
                acceptance_cWrap.style.display = 'none';
                modifiedAcceptance_cWrap.style.display = 'none';
                labelWrap.style.display = 'block';
                modifiedLabelWrap.style.display = 'block';
                descriptionWrap.style.display = 'none';
                modifiedDescriptionWrap.style.display = 'none';
                generatedTestCasesWrap.style.display = 'none';
        }else if (taskElementValue.value == "description") {
                acceptance_cWrap.style.display = 'none';
                modifiedAcceptance_cWrap.style.display = 'none';
                labelWrap.style.display = 'none';
                modifiedLabelWrap.style.display = 'none';
                descriptionWrap.style.display = 'block';
                modifiedDescriptionWrap.style.display = 'block';
                generatedTestCasesWrap.style.display = 'none';
        }else if (taskElementValue.value == "acceptance_criteria") {
                acceptance_cWrap.style.display = 'block';
                modifiedAcceptance_cWrap.style.display = 'block';
                labelWrap.style.display = 'none';
                modifiedLabelWrap.style.display = 'none';
                descriptionWrap.style.display = 'none';
                modifiedDescriptionWrap.style.display = 'none';
                generatedTestCasesWrap.style.display = 'none';
            }


        placeholderElement.style.display = 'flex';

        setTimeout(function () {
       
            placeholderElement.style.display = 'none';
            
        }, 200);

    }


  

    refreshBtn.onclick =() => {

      
        placeholderElement.style.display = 'flex';
        updateBtn.disabled = false;

        setTimeout(function () {
            placeholderElement.style.display = 'none';
            getContent()
            contentGetter()
        }, 200);
        
    }

    updateBtn.onclick =() => {
       

        placeholderElement.style.display = 'flex';

        updateContent()
        setTimeout(function () {
            placeholderElement.style.display = 'none';
            getContent()
        }, 1000);

        
    }
    
    rephraseBtn.onclick =() => {
        placeholderElement.style.display = 'flex';
        updateBtn.disabled = false;

      


        contentRephrase()

            setTimeout(function () {
                placeholderElement.style.display = 'none';
                contentGetter()
                getContent()
            }, 5000);
            
        }

    generateTestsBtn.onclick =() => {
            updateBtn.disabled = false;
            placeholderElement.style.display = 'flex';
            generatedTestCasesWrap.style.display = 'block';

          

            generateTestCases()
    
                setTimeout(function () {
                    placeholderElement.style.display = 'none';
                    contentGetter()
                    getContent()
                }, 5000);
                
            }
  

            document.addEventListener('DOMContentLoaded', function () {
                updateBtn.disabled = false;
                // generatedTestCasesWrap.style.display = 'block';
        // console.log('taskElementValue' ,  prefs.taskElement);
               
                // window.open(location.href, "popup", "toolbar=0" );
                
                page404.style.display = 'none';
                

                
        // chrome.runtime.onMessageExternal.addListener(function (message) {
        //     if (message === 'fetched') {
        //         console.log('fetched again');
        //         placeholderElement.style.display = 'none';
        //     }
        // })

        contentGetter()
        getContent()
       
        setTimeout(function () {
            // Hide the preloader
            placeholderElement.style.display = 'none';
                contentGetter()
                getContent()
            }, 1000);
            
        })    