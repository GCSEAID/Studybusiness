var ans = document.getElementsByClassName("question")
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var url = `${window.location.protocol}//${window.location.host}/carbolt_mineral_ltd.html?`
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
        setTimeout(()=>notif.classList.add("hidden"),1500);
    }
    db = true
}



function pageLoaded() {
   console.log("Body Loaded");

   // Get the params from the query string
   const urlSearchParams = new URLSearchParams(window.location.search);
   var params = Object.fromEntries(urlSearchParams.entries());

   // Input variable
   const answers = document.getElementsByClassName("question");

   // populate the form fields
   for (var i = 0; i < answers.length; i++) {
     let q = "q" + (i + 1);	
     console.log(params[q])
     answers[i].value = params[q] || "";
   } 
}
