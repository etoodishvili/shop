let togglebutton = document.getElementById('togglebutton');
let navbarlinks = document.getElementById('navbarlinks');

togglebutton.addEventListener('click',function() {
  navbarlinks.classList.toggle('active');
})




const productPreview = document.querySelector('.product_preview');
const bottomSide = document.querySelector('.bottom-side');
const images = document.querySelectorAll('img');
console.log(images)