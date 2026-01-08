// If it is firefox, change layout

let checkMozilla = navigator.userAgent.includes("Mozilla"); // boolean

// Add navbar
const nav = document.querySelector(".navbar");
fetch("/views/navbar.html")
    .then(res => res.text())
    .then(data => { nav.innerHTML = data })

// Add head CDN
const cdn = document.querySelector("head");
fetch("/views/head.html")
    .then(res => res.text())
    .then(data => { cdn.innerHTML += data })

// Add footer
const foot = document.querySelector(".footer");
fetch("/views/footer.html")
    .then(res => res.text())
    .then(data => {
        foot.innerHTML = data;
        // Add date to footer
        document.getElementById("year").textContent = new Date().getFullYear()
    })


// If using mozilla
if (checkMozilla) {
    document.querySelector(".navbar").setAttribute("style", "background-color:#e3e3e378");

}


//console.log(checkMozilla);
//console.debug(navigator.userAgent);
//console.debug("hello");

