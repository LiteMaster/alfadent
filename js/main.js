let sliderGaleryArrow = document.querySelectorAll(".arrow.sliderGallery");
let slideGalery = document.querySelectorAll(".slideGallery");
let step = 0;
let count = slideGalery.length - 1;
sliderGaleryArrow.forEach((e) => {
    e.addEventListener('click', () => {

        clearInterval(timerPrise);
        slideGalery[step].classList.remove('active');
        step += Number(e.dataset.step);
        if (step > count) step = 0;
        if (step < 0) step = count;
        slideGalery[step].classList.add('active');
        timerPrise = setInterval(switchTab, 5000);

    })
})

function switchTab() {
    slideGalery[step].classList.remove('active');
    step ++;
    if (step > count) step = 0;
    if (step < 0) step = count;
    slideGalery[step].classList.add('active');
}

let timerPrise = setInterval(switchTab, 3000);
