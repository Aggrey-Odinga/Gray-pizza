let searchbtn = document.querySelector('#search');
let searchfrm = document.querySelector('.head .search-bar');

searchbtn.onclick = () => {
    searchfrm.classList.toggle('active');
    menu.classList.remove('active');
}
// home toggle effect
let menu = document.querySelector('.head .navbar');
document.querySelector('#bars').onclick = () => {
    menu.classList.toggle('active');
    searchfrm.classList.remove('active');
}