const cardWrapper = document.querySelector('#wrapper');
const card = document.querySelector('#card');

const openDescBtn = document.querySelector('#openDesc');
const openDescIcon = document.querySelector('#openDescIcon');

const desc = document.querySelector('#desc');
const descBtns = document.querySelector('.desc-btns');

const background = document.querySelector('body');
const darkModeBtn = document.querySelector('#toggle-dark-icon');

const addClass = (cssClass, ...elements) => {
    const elementList = [...elements]
    elementList.forEach(element => {
        element.classList.add(`${cssClass}`);
    })
}
const removeClass = (cssClass, ...elements) => {
    const elementList = [...elements]
    elementList.forEach(element => {
        element.classList.remove(`${cssClass}`);
    })
}

// show aside button
card.addEventListener('mouseover', ()=>{
    addClass('open-desc-active', openDescBtn);
    removeClass('hide', openDescIcon);

    removeClass('border-radius-right', card);
})
openDescBtn.addEventListener('mouseover', ()=>{
    addClass('open-desc-active', openDescBtn);
    removeClass('hide', openDescIcon);

    removeClass('border-radius-right', card);
})
// hide aside button
card.addEventListener('mouseout', ()=>{
    addClass('hide', openDescIcon);
    removeClass('open-desc-active', openDescBtn);

    if(desc.classList.contains('hide'))
        addClass('border-radius-right', card);
})
openDescBtn.addEventListener('mouseout', ()=>{
    addClass('hide', openDescIcon);
    removeClass('open-desc-active', openDescBtn);
    
    if(desc.classList.contains('hide'))
        addClass('border-radius-right', card);
})

// open description
openDescBtn.addEventListener('click', ()=>{
    addClass('hide', openDescBtn);
    removeClass('hide', desc, descBtns);
})
// close description
const closeDescBtn = document.querySelector('#close-desc');

closeDescBtn.addEventListener('click', ()=>{
    let hideElements = [desc, descBtns, openDescIcon];
    addClass('hide', ...hideElements);

    removeClass('hide', openDescBtn);
    removeClass('open-desc-active', openDescBtn);
})

// dark mode
let darkMode = localStorage.getItem('darkMode');

const addDarkMode = () =>{
    addClass('dark-mode', cardWrapper, background);
    darkMode = localStorage.setItem('darkMode', 'enabled');
}
const removeDarkMode = ()=>{
    removeClass('dark-mode',  cardWrapper, background);
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
const nextImgBtn = document.querySelector('#next-img');
const previousImgBtn = document.querySelector('#previous-img');
let indexImg = 1;

const slideShow = num =>{
    if(num < 1) indexImg = images.length
    if(num > images.length) indexImg = 1
    
    for(let i = 0; i < images.length; i++){
        images[i].classList.add('hide');
    }
    images[indexImg - 1].classList.remove('hide');
}

const nextImg = n => {
    slideShow(indexImg += n)
}

nextImgBtn.addEventListener('click', () => {
    nextImg(+1);
})
previousImgBtn.addEventListener('click', () => {
    nextImg(-1);
})