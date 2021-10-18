var ans = document.getElementsByClassName("question")
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var url = `${window.location.protocol}//${window.location.host}/answers.html/?`
var notif = document.getElementById("notif");

// console.log(a.concat("/?","q1=","test"))

console.log(params); // object of all querys


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
        console.log(url)
        navigator.clipboard.writeText(url);
        
        notif.classList.remove("hidden")
        setTimeout(()=>notif.classList.add("hidden"),1500);
    }
    db = true
}
