function displayWebpage(url) {
    let content = document.getElementById("mainContent");

    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.responseType = "document";
    req.send();

    req.addEventListener('load', () => {
        let res = req.response;
        content.innerHTML = res.body.innerHTML;
        MathJax.typeset();
    });
}