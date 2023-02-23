
let btnRight = document.querySelector(".right");
let btnLeft = document.querySelector(".left");
let slides = document.querySelectorAll(".slide-first");
let i = 0;



btnRight.addEventListener("click", function (e) {
    e.preventDefault()
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

btnLeft.addEventListener("click", function (e) {
    e.preventDefault()
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
