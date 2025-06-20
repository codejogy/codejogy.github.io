// If it is firefox, change layout

let checkMozilla = navigator.userAgent.includes("Mozilla"); // boolean

if (checkMozilla) {
	document.querySelector(".navbar").setAttribute("style", "background-color:#e3e3e378");

}


console.log(checkMozilla);
console.debug(navigator.userAgent);
console.debug("hello");

