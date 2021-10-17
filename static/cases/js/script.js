var ans = document.getElementsByClassName("question")
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
var url = `${window.location.protocol}//${window.location.host}/answers.html/?`

// console.log(a.concat("/?","q1=","test"))

console.log(params); // object of all querys


function save() {
for (var i=0; i < ans.length;i++) {
    var count = i + 1;
    url = url.concat(`q${count}=`,ans[i].value,"&")

}
  console.log(url)
}