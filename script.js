let togglebutton = document.getElementById('togglebutton');
let navbarlinks = document.getElementById('navbarlinks');

togglebutton.addEventListener('click',function() {
  navbarlinks.classList.toggle('active');
})