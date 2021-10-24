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
  	console.log(params)
    const questions = document.getElementsByClassName("question");
    // sole.log(questions)
		// var questions_lst = Object.keys(questions).map((key) => [Number(key), questions[key]]);
    // Display the params from the querystring
  	// console.log(questions_lst[0][1].value);
    // populate the form fields
  
    
  
    for (var i = 0; i < 6; i++) {
      let id = "in_" + (i + 1);
      let q = "q" + (i + 1);	
      // console.log(params[q])
      questions[i].value = params[q]; // params["q1"] || "";
      // console.log(questions_lst)
      console.log(questions[i]) 
      console.log(params[q])
     }
    /*
    const q1 = document.getElementById("q1");
    q1.value = params["q1"] || "";
    
    const q2 = document.getElementById("q2");
    q2.value = params["q2"] || "";
    */
      
}
