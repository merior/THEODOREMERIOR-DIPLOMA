
let btnRight = document.getElementsByClassName(".right");
let btnLeft = document.getElementsByClassName(".left");
let slides = document.querySelectorAll("slide-first");
let i = 0;
console.log(btnLeft)
console.log(btnRight)
console.log(slides)
 

btnRight.addEventListener("click", function () {
    preventDefault()
    ++i
    if (i >= slides.length) {
        slides[i-1].classList.remove("not-active");
        i = 0;
        slides[i].classList.add("not-active");
    } else { 
        slides[i-1].classList.remove("not-active");
        slides[i].classList.add("not-active");
    }
})

btnLeft.addEventListener("click", function () {
    preventDefault()
    ++i
    if (i >= slides.length) {
        slides[i-1].classList.remove("not-active");
        i = 0;
        slides[i].classList.add("not-active");
    } else {
        slides[i-1].classList.remove("not-active");
        slides[i].classList.add("not-active");
    }
})
