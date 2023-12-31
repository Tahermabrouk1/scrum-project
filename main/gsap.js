/** @format */

const Slider = document.querySelector(".Slider")

var children = Slider.children
var currentIndex = 0

var IndexAddition = 0

// Detect first selected profile
for (i = 0; i < children.length; i++) {
  if (children[i].classList.contains("CurrentProfile")) {
    currentIndex = i
    break
  }
}

gsapLevel = -320
multiplier = 1

//Main function
function WhileTrue() {
  setTimeout(function () {
    currentIndex += 1

    //previous index
    children[currentIndex - 1].classList.remove("CurrentProfile")
    children[currentIndex - 1].classList.add("HiddenProfile")

    //current index
    children[currentIndex].classList.add("CurrentProfile")
    children[currentIndex].classList.remove("HiddenProfile")

    gsap.to(".Slider", {
      x: gsapLevel * multiplier,
      duration: 2,
    })

    multiplier += 1

    Slider.appendChild(Slider.children[IndexAddition].cloneNode(true))

    IndexAddition += 1

    WhileTrue()
  }, 3000)
}

WhileTrue()
