const cardWrapper = document.querySelector('#wrapper');
const openDescBtn = document.querySelector('#openDesc');
const openDescIcon = document.querySelector('#openDescIcon');
const desc = document.querySelector('#desc');

const background = document.querySelector('main');
const socialLinks = document.querySelectorAll('#link');
const darkModeBtn = document.querySelector('#toggle-dark');
const darkModeIcon = document.querySelector('#toggle-dark-icon');

let darkMode = localStorage.getItem('darkMode');

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
const addDarkMode = () =>{
    cardWrapper.classList.add('dark-mode');
    darkModeIcon.classList.add('dark-mode');

    socialLinks.forEach(link => {
        link.classList.add('dark-mode');
    })
    background.classList.add('dark-mode-main');
    
    darkMode = localStorage.setItem('darkMode', 'enabled');
}
const removeDarkMode = ()=>{
    cardWrapper.classList.remove('dark-mode');
    darkModeIcon.classList.remove('dark-mode');

    socialLinks.forEach(link => {
        link.classList.remove('dark-mode');
    })
    background.classList.remove('dark-mode-main');

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





