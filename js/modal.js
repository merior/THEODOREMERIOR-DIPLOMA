
const modal = document.querySelector('.popup');
const buttons = document.querySelectorAll('.test_drive__link');
const background = document.querySelector('.popup-content');
const close = document.querySelector('.cl-btn-7');

buttons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        modal.classList.remove('not-active'); 
        background.classList.remove('not-active'); 
    })
});

document.addEventListener('click', (e) => { 
    if(e.target === modal) { 
        modal.classList.add('not-active'); 
        popup.classList.add('not-active'); 
    }
});
close.addEventListener('click', (e) => { 
        e.preventDefault(); 
        modal.classList.add('not-active'); 
    })