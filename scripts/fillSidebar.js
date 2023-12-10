let headings = document.getElementsByTagName("h1");
let sidebar = document.getElementById("sidebar");
for (const h of headings) {
    let hText = h.textContent;
    sidebar.innerHTML
        += '<a href="#' + hText.replace(" ", "_") + '">' + hText + "</a>";
}