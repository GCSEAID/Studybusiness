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



function pageLoaded() {
    const urlIdParams = window.location.search;
		const id_web_url = String(urlIdParams)[4] - 1;

    var questions = document.getElementsByClassName("question")
    var title = document.querySelector("#caseTitle");
    var desc = document.querySelector("#caseDesc");
    var questionTitle = document.querySelector("#caseQuestionsTitle");
    
    const caseStudy = [{
        id: '1',
        title: "Goods and Services, Air Vigour: Business Activity",
        desc: `Air Vigour is a Spanish public limited company which has most of its factories in Spain.  Air Vigour produces air conditioners, refrigerator and other electric appliance. Air Vigour is one of the best-selling air conditioner appliances in Africa and Europe. 
      =The Spanish company have 3 factories in China; 1 factory in Nairobi Kenya; and 4 factories in Bilbao, Spain. Air Vigour has maintained a continuous growth in sales by 3%. Air Vigour has invested its retained profits into building smartphones in 2018.  Air Vigour has invested in factories in India and R&D to support this expansion into the smartphones market.  In addition, to this investment Air Vigour has focused on the customer service. This is because there have been various complaints on the Air Vigour’s customer service.`,
        questions: ["Define Goods and services. (2 marks)", "Define a Business. (2 marks)", "Why is it important for Air Vigour PLC remain profitable to their stakeholders? (3 marks)","Who are the most important stakeholders to Air Vigour and explain why? (6 marks)","Discuss the importance of having a clear business of objective in a changing environment? (9 marks)"]
    }, {
      id: "2",
      title: "Omar Sweet Shop: Business Objectives",
      desc: `Omar owns a sweet shop in one of the busiest souqs in Kuwait. Omar most profitable months were in the Ramadan season where people fasted from sunrise to sunset. Omar’s family has also been helping in the running of the business. The sole trader has been thinking of starting a private limited company and finally integrate his family completely into the business. 
	In the recent months Omar has been struggling to gain customers because of the increase in the VAT by 10%. This has caused Omar to have his first losses by 820.57 Kuwaiti Dinar. Omar has decided to change his objectives to survive until the Ramadan arrives. He has then planned to raise enough capital to buy a shop in a wealthy district of Kuwait City to gain more customers.`,
		questions: ["What is the meaning of Objectives? (2 marks)", "Give me two types of objectives? (2 marks)", "From the Case Study, get one objective that Omar has set and explain why that objective is a good or bad one. (3 marks)", "Explain one reason why businesses change their objectives? (3 marks)", "List one stakeholder and explain their purpose in Omar’s business. (4 marks)", "What are the two advantages of setting objectives in Omar’s case? (6 marks)", `Discuss whether Omar’s objective stated below is a good objective:
“From today onwards until the start of Ramadan we shall focus only on making the business survive."
(9 marks)
`]      
    }]

    title.innerText =  caseStudy[id_web_url].title
    desc.innerText =  caseStudy[id_web_url].desc
    questionTitle.innerText = 'Questions For ' + title.innerText

    for (i = 0; i < caseStudy[id_web_url].questions.length; i++) {
        var original = document.getElementById('duplicator');
        var clone = original.cloneNode(true);
        clone.id = i;
        original.parentNode.appendChild(clone)
    }
    var item = document.getElementById("duplicator");
    item.remove(item)

    for (i = 0; i < caseStudy[id_web_url].questions.length; i++) {
        var c = i+1
        questions[i].parentElement.firstElementChild.innerHTML = "<strong>Question " + [c] + ":</strong> " + caseStudy[id_web_url].questions[i];
    }

    console.log("Body Loaded");

    // Get the params from the query string
    const urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());

    // Input variable
    const answers = document.getElementsByClassName("question");

    // populate the form fields
    for (var i = 1; i < answers.length; i++) {
        let q = "q" + i;
        console.log(params[q])
        answers[i].value = params[q] || "";
    }
}


