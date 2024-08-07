let sidebar = document.getElementById("sidebar");

let req = new XMLHttpRequest();
req.open("GET", "../pages");
req.responseType = "document";
req.send();

req.addEventListener('load', () => {
    // sidebar.innerHTML += ;
    let res = req.response;
    let tbrows = res.body.getElementsByTagName("tr");
    for (let i = 2; i < tbrows.length; ++i) {
        let url = "./pages/" + tbrows[i].cells[0].innerText;
        let resName = tbrows[i].cells[0].innerText;
        let onclickText = "displayWebpage('" + url + "')";
        sidebar.innerHTML +=
            '<a onclick="' + onclickText + '">' +
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