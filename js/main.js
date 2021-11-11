// profile code
let button = document.querySelector(".account");
button.onclick = function () {
  let menu = document.querySelector(".menu-profile");
  console.log(menu);
  menu.classList.toggle("shown");
}
// scroll top button 
const btnScroll = document.querySelector('.scroll');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 250) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
});
btnScroll.addEventListener('click', () => {
  document.documentElement.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
});
// hidden the birthday cart
function closeBtn() {
  var x = document.querySelector(".birthday-cart"),
      y = document.querySelector(".undo");
  x.style.display = "none";
  y.style.display = "block";
}
function undo() {
  var x = document.querySelector(".birthday-cart"),
  y = document.querySelector(".undo");
  x.style.display = "block";
  y.style.display = "none";
}
// dark website
const darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-on");
}