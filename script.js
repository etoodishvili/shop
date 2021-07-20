let togglebutton = document.getElementById('togglebutton');
let navbarlinks = document.getElementById('navbarlinks');

togglebutton.addEventListener('click',function() {
  navbarlinks.classList.toggle('active');
})




const productPreview = document.querySelector('.product_preview');
const bottomSide = document.querySelector('.bottom-side');
const images = document.querySelectorAll('img');
console.log(images)
const topSide = document.createElement('div');
productPreview.appendChild(topSide);
topSide.classList.add('top-side');
topSide.style.cssText+= `background-image: url('images/paraiso1.jpg')`;

images.forEach(image => {
    image.addEventListener('click', function() {
        let src = image.src;
        topSide.style.cssText+= `background-image: url(${src})`;
        
    })
})