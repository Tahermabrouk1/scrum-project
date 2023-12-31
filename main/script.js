/** @format */

//animation mta3 nwamer

// Selecting elements
let valueDisplays = document.querySelectorAll("#stats .num")
let stats = document.getElementById("stats")
let interval = 4000

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return window.scrollY >= 3100
}

// Function to animate numbers
function animateNumbers() {
  valueDisplays.forEach((valueDisplay) => {
    let initialState = 0
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))

    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
      startValue += 1
      valueDisplay.textContent = startValue + initialState + "K"
      if (startValue === endValue) {
        clearInterval(counter)
      }
    }, duration)
  })
}

// Event listener for scrolling
window.addEventListener("scroll", function () {
  if (isInViewport(stats)) {
    animateNumbers()
    window.removeEventListener("scroll", arguments.callee)
  }
})

/* translation */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
console.log(google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element'))
const selectElement = document.getElementsByClassName("VIpgJd-ZVi9od-ORHb")

let paragraph = document.getElementsByClassName("paragraph")
function show(){
    paragraph.style.overflow = "visible";
}
