let api = 'https://api.github.com/users/';
let input = document.querySelector('input');
let fname = document.querySelector('.name');
let srcBtn =document.querySelector('#search-btn');
async function getUser(userName){
    let response = await fetch(`${api+userName}`);
    let data = await response.json()
    console.log(data)
    fname.textContent = data.name ;
    document.querySelector('.bio').textContent = data.bio;
    document.querySelector('.avatar').innerHTML = `
    <img src=${data.avatar_url} alt="">
    `;
    document.querySelector(".followers").textContent = data.followers ;
    document.querySelector(".following").textContent = data.following ;
    document.querySelector(".repository").textContent = data.public_repos ;
   ;
   getRepos(data.repos_url)
}
async function getRepos(repUrl){
   let response = await fetch(repUrl);
   let data = await response.json();
   data.forEach((item) => {
    document.querySelector('.rep-url').innerHTML += `
    <a href=${item.html_url} target="_blank" >${item.name}</a>
   `
   });
}
srcBtn.addEventListener('click',()=>{
   if(input.value !==''){
      getUser(input.value);
   }
})