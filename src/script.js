const cardWrapper = document.querySelector('#wrapper');
const openDescBtn = document.querySelector('#openDesc');
const openDescIcon = document.querySelector('#openDescIcon');
const desc = document.querySelector('#desc');

cardWrapper.addEventListener('mouseover', ()=>{
    if(openDescBtn.classList.contains('open-desc-active')){
        return
    }else{
        openDescBtn.classList.toggle('open-desc-active');
        openDescIcon.classList.remove('hide');
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