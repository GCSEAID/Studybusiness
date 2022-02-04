async function fetchData() {
    var requrl = `${window.location.protocol}//${window.location.host}/static/cases/js/test.json`;
    var req = new Request(requrl);
    var res = await fetch(req);

    let data = await res.json();

    // for (var x in data) {
    //     if (data.hasOwnProperty(x)) {
    //         return x, data[x] // x - name of section // data[x] - array for case data
    //     }
    // }
    return data
};

// (async () => {
//     let a = await fetchData();
//     console.log(a)
// })

async function test() {
    let data = await fetchData();
    console.log(data)

    let secTitle = document.querySelector("#topicTitle")
    let casestudy = document.querySelector("#case");

    for (let [i, v] of Object.entries(data)) {
        let newtitle = secTitle.cloneNode(true);
        console.log(i, v)

        newtitle.innerText = i
        
        
        document.querySelector(".topic").appendChild(newtitle);
        for (index in Object.keys(v)) {
            let newcase = casestudy.cloneNode(true);
            casestudy.remove(casestudy);
            secTitle.remove(secTitle);

            newcase.id = v[index].id;
            newcase.href = "template?topic=" + i + "&id=" + newcase.id;

            let newcaseImg = newcase.querySelector("#caseimg");
            let newcaseTitle = newcase.querySelector("#caseTitle");
            let newcaseDesc = newcase.querySelector("#caseDesc");

            newcaseImg.src = "/static/public/images/" + v[index].img;
            newcaseTitle.innerText = v[index].title;
            newcaseDesc.innerText = v[index].shortdesc;

            document.querySelector(".topic").appendChild(newcase);
        }

    }

    console.log(secTitle)
    console.log(casestudy)
}



/** TODO: look at the script.js file it shows how i need to clone the 
 * title for each section so section 1 2 3 and then clone
 * the box for each case study too using the data from above
 */