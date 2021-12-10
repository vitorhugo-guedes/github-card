const URL_profile = 'https://api.github.com/users/vitorhugo-guedes';
const URL_repos = 'https://api.github.com/users/vitorhugo-guedes/repos';

const profileImg = document.querySelector('#profile-img');
const userBio = document.querySelector('#bio');
const userName = document.querySelector('#name');

(async()=>{
    const user = await fetch(URL_profile)
        .then(res => res.json())
        .then(data => {
            return data
        })
    profileImg.src = user.avatar_url
    userName.textContent = user.name
    userBio.textContent = user.bio
})()


const actualProjects = {
    first: 'financial-application',
    second: 'color-flipper',
    third: 'richText-editor'
}
const projSiteBtn = document.querySelector('#proj-site');
const projRepoBtn = document.querySelector('#proj-repo');

const projImgs = document.querySelectorAll('#slide-img');

const nextBtn = document.querySelector('#next-img');
const prevBtn = document.querySelector('#previous-img');

(async() => {
    const projects = await fetch(URL_repos).then(res => res.json()).then(repo => repo)
    
    let arr = projects.map(project => project)
    let apps = {};

    arr.forEach((element)=>{
        if(actualProjects.first == element.name)
            apps.finapp = element
        else if(actualProjects.second == element.name)
            apps.clrFlipper = element
        else if(actualProjects.third == element.name)
            apps.editor = element
    })
    
    // projSiteBtn.setAttribute('onclick', `window.open('${apps.clrFlipper.homepage}')`)

    projSiteBtn.setAttribute('href', `${apps.finapp.homepage}`)
    projRepoBtn.setAttribute('href', `${apps.finapp.html_url}`)

    nextBtn.addEventListener('click', ()=>{
        if(!projImgs[0].classList.contains('hide')){
            projSiteBtn.setAttribute('href', `${apps.finapp.homepage}`)
            projRepoBtn.setAttribute('href', `${apps.finapp.html_url}`)
        }
        if(!projImgs[1].classList.contains('hide')){
            projSiteBtn.setAttribute('href', `${apps.clrFlipper.homepage}`)
            projRepoBtn.setAttribute('href', `${apps.clrFlipper.html_url}`)
        }
        if(!projImgs[2].classList.contains('hide')){
            projSiteBtn.setAttribute('href', `${apps.editor.homepage}`)
            projRepoBtn.setAttribute('href', `${apps.editor.html_url}`)
        }
    })
    prevBtn.addEventListener('click', ()=>{
        if(!projImgs[0].classList.contains('hide')){
            projSiteBtn.setAttribute('href', `${apps.finapp.homepage}`)
            projRepoBtn.setAttribute('href', `${apps.finapp.html_url}`)
        }
        if(!projImgs[1].classList.contains('hide')){
            projSiteBtn.setAttribute('href', `${apps.clrFlipper.homepage}`)
            projRepoBtn.setAttribute('href', `${apps.clrFlipper.html_url}`)
        }
        if(!projImgs[2].classList.contains('hide')){
            projSiteBtn.setAttribute('href', `${apps.editor.homepage}`)
            projRepoBtn.setAttribute('href', `${apps.editor.html_url}`)
        }
    })
    
})()