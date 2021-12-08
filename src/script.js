const cardWrapper = document.querySelector('#wrapper');

const openDescBtn = document.querySelector('#openDesc');
const openDescIcon = document.querySelector('#openDescIcon');

const desc = document.querySelector('#desc');
const descBtns = document.querySelector('.desc-btns');

const background = document.querySelector('main');
const darkModeBtn = document.querySelector('#toggle-dark-icon');

// show and hide aside button
cardWrapper.addEventListener('mouseover', ()=>{
    openDescBtn.classList.add('open-desc-active');
    openDescIcon.classList.remove('hide');
})
cardWrapper.addEventListener('mouseout', ()=>{
    openDescBtn.classList.remove('open-desc-active');
    openDescIcon.classList.add('hide');
})
// open description
openDescBtn.addEventListener('click', ()=>{
    openDescBtn.classList.add('hide');
    desc.classList.remove('hide');
    descBtns.classList.remove('hide');
})
// close description
const closeDescBtn = document.querySelector('#close-desc');

closeDescBtn.addEventListener('click', ()=>{
    desc.classList.add('hide');
    descBtns.classList.add('hide');
    openDescBtn.classList.remove('open-desc-active');
    openDescBtn.classList.remove('hide');
})

// dark mode
let darkMode = localStorage.getItem('darkMode');

const addDarkMode = () =>{
    cardWrapper.classList.add('dark-mode');
    background.classList.add('dark-mode');
    
    darkMode = localStorage.setItem('darkMode', 'enabled');
}
const removeDarkMode = ()=>{
    cardWrapper.classList.remove('dark-mode');
    background.classList.remove('dark-mode');
    
    darkMode = localStorage.setItem('darkMode', null);
}

if(darkMode == 'enabled')
    addDarkMode();

darkModeBtn.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled')
        addDarkMode();
    else
        removeDarkMode();
})

// slide
const images = document.querySelectorAll('#slide-img');


