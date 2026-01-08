// If it is firefox, change layout

let checkMozilla = navigator.userAgent.includes("Mozilla"); // boolean

// Add navbar
const nav = document.querySelector(".navbar");
fetch("/views/navbar.html")
    .then(res => res.text())
    .then(data => { nav.innerHTML = data })

// Add footer
const foot = document.querySelector(".footer");
fetch("/views/footer.html")
    .then(res => res.text())
    .then(data => { foot.innerHTML = data })

// If using mozilla
if (checkMozilla) {
    document.querySelector(".navbar").setAttribute("style", "background-color:#e3e3e378");

}


//console.log(checkMozilla);
//console.debug(navigator.userAgent);
//console.debug("hello");

