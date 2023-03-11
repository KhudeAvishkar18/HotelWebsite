// prompt('What is your Name?','Guest');

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
list = document.querySelector('.list')

burger.addEventListener('click', ()=>{
    list.classList.toggle('v-list-resp');
    navbar.classList.toggle('h-nav-resp');
})
