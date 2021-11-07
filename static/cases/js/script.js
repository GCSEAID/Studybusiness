import { caseStudy } from 'static/public/js/StudyBusinessvar.js'


var ans = document.getElementsByClassName("question")
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var url = `${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.search}&`
var notif = document.getElementById("notif");

// console.log(a.concat("/?","q1=","test"))

// console.log(params); // object of all querys


var db = false

function save() {
    if (db == false) {
        for (var i = 0; i < ans.length; i++) {
            var count = i + 1;
            if (db == false) {
                url = url.concat(`q${count}=`, ans[i].value, "&")
                url.slice(0, -1)
            }
        }
        // console.log(url)
        navigator.clipboard.writeText(url);

        notif.classList.remove("hidden")
        setTimeout(() => notif.classList.add("hidden"), 1500);
    }
    db = true
}


function populateAnswer() {
    // Get the params from the query string
    const urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());

    // Input variable
    const answers = document.getElementsByClassName("question");

    // populate the form fields
    for (var i = 1; i < answers.length; i++) {
        let q = "q" + i;
        console.log(params[q])
        answers[i-1].value = params[q] || "";
    }
}

function populateValues(id_web_url, questions, title, desc, questionTitle, item, caseStudy) {
    //Inserts title, description and question title values from the caseStudy Object
    title.innerText =  caseStudy[id_web_url].title
    desc.innerText =  caseStudy[id_web_url].desc
    questionTitle.innerText = 'Questions For ' + title.innerText

    //Duplicates and then deletes question divs
    for (i = 0; i < caseStudy[id_web_url].questions.length; i++) {
        var original = document.getElementById('duplicator');
        var clone = original.cloneNode(true);
        clone.id = i;
        original.parentNode.appendChild(clone)
    }
    item.remove(item) //deletes duplicator

    for (i = 0; i < caseStudy[id_web_url].questions.length; i++) {
        var c = i+1
        questions[i].parentElement.firstElementChild.innerHTML = "<strong>Question " + [c] + ":</strong> " + caseStudy[id_web_url].questions[i];
    }

    console.log("Body Loaded");
}

function pageLoaded() {
    // Each one gets access to all the input areas on the HTML for the values to go into
    const urlIdParams = window.location.search;
	const id_web_url = String(urlIdParams)[4] - 1;
    var questions = document.getElementsByClassName("question")
    var title = document.querySelector("#caseTitle");
    var desc = document.querySelector("#caseDesc");
    var questionTitle = document.querySelector("#caseQuestionsTitle");
    var item = document.getElementById("duplicator"); //Selects duplicator div to be later removed (unnecessary div at the end of the page)

    

    //Populate the html with case study information
    populateValues(id_web_url, questions, title, desc, questionTitle, item, caseStudy)
    

    // If answers are avaialbe then the populate function deals with that
    populateAnswer()
    
}


