const url = 'https://api.github.com/users/vitorhugo-guedes'
const profileImg = document.querySelector('#profile-img');
const userBio = document.querySelector('#bio');
const userName = document.querySelector('#name');

(async()=>{
    const user = await fetch(url)
        .then(res => res.json())
        .then(data => {
            return data
        })
    profileImg.src = user.avatar_url
    userName.textContent = user.name
    userBio.textContent = user.bio
})()