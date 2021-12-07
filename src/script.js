const cardWrapper = document.querySelector('#wrapper');
const openDescBtn = document.querySelector('#openDesc');
const openDescIcon = document.querySelector('#openDescIcon');
const desc = document.querySelector('#desc');

const background = document.querySelector('main');
const socialLinks = document.querySelectorAll('#link');
const darkModeBtn = document.querySelector('#toggle-dark');
const darkModeIcon = document.querySelector('#toggle-dark-icon');

// show aside button
cardWrapper.addEventListener('mouseover', ()=>{
    if(openDescBtn.classList.contains('open-desc-active')){
        return
    }else{
        openDescBtn.classList.toggle('open-desc-active');
        setInterval(openDescIcon.classList.remove('hide'), 5000);
    }
})
cardWrapper.addEventListener('mouseout', ()=>{
    if(openDescBtn.classList.contains('open-desc-active')){
        openDescBtn.classList.toggle('open-desc-active');
        openDescIcon.classList.add('hide');
    }
})
openDescBtn.addEventListener('click', ()=>{
    desc.classList.toggle('show');
    if(desc.classList.contains('show')){
        openDescBtn.classList.add('hide');
    }
})

// dark mode
darkModeBtn.addEventListener('click', () => {
    cardWrapper.classList.toggle('dark-mode');
    darkModeIcon.classList.toggle('dark-mode');
    socialLinks.forEach(link => {
        link.classList.toggle('dark-mode');
    })
    background.classList.toggle('dark-mode-main');
})