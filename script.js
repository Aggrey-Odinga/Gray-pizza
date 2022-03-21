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
window.onscroll = () => {
    menu.classList.remove('active');
    searchfrm.classList.remove('active')
}
var conceptName = $('#aioConceptName').find(":selected").text();

// $("number").change(function(){
//   alert("The text has been changed.");
// });
// $('#number').on('input',function(e){
//     alert('Changed!')
// }); test 

