let sidebar = document.getElementById("sidebar");

let req = new XMLHttpRequest();
req.open("GET", "./files.html");
req.responseType = "document";
req.send();

req.addEventListener('load', () => {
    let res = req.response;
    res = res.body.innerText.trim().split(/\r?\n/);
    for (let i = 0; i < res.length; ++i) {
        res[i] = res[i].trim();
    }
    console.log(res);

    for (let file of res) {
        let url = "./pages/" + file;
        let resName = file;
        let onclickText = "displayWebpage('" + url + "')";
        sidebar.innerHTML +=
            '<a href="#"   onclick="' + onclickText + '">' +
            resName +
            "</a>";
    }
});



// function urlify(str) {
//     return str
//         .replace(' ', '_')
//         .replace("'", '%27');
// }

// let headings = document.getElementsByTagName("h1");
// let sidebar = document.getElementById("sidebar");
// for (const h of headings) {
//     let hText = h.textContent;
//     sidebar.innerHTML
//         += '<a href="#' + urlify(hText) + '">' + hText + "</a>";
// }

// let page_select = 
//        '<div id="page-nav">'
//      + '<label id="page-select-label" for="page-select">Choose a page:</label>'
//      + '<select name="page" id="page-select">';
// let pages = [
//     "arithmetic",
//     "plotting",
//     "systems of linear equations"
// ];
// for (const p of pages) {
//     page_select
//         += '<option value="' + urlify(p) + '">' + p + '</option>';
// }
// page_select
//     += '</select></div>';
// sidebar.innerHTML += page_select;