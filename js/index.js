if (document.querySelector(".slide-first")) {
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
}


if (document.querySelector(".apex-info__sliders")) {
    document.querySelector(".apex-info__sliders").addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.closest(".circle")) {
            document.querySelectorAll(".circle").forEach((bullet) => {
                bullet.classList.remove("target");
            })
            e.target.classList.add("target");
            document.querySelectorAll(".apex-info__slider").forEach((slide) => {
                slide.classList.remove("target");
                if (slide.id === e.target.hash.substring(1)) {
                    slide.classList.add("target");
                }
            })
        }
    })
}

if (document.querySelector(".apex_car-size_info")) {
    document.querySelector(".apex_car-size_info").addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.closest(".size-slide__link")) {
            document.querySelectorAll(".size-slide__link").forEach((btn) => {
                btn.classList.remove("target");
            })
            e.target.classList.add("target");
            document.querySelectorAll(".size__slides").forEach((slide) => {
                slide.classList.remove("target");
                if (slide.id === e.target.hash.substring(1)) {
                    slide.classList.add("target");
                }
            })
        }
    })
}