// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
// load all event listners
allEventListners();
// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}
// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}
// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}
// reviews slider
const imgs = document.querySelectorAll('.slider-box img');
const right_arrow = document.querySelector('.r-arrow');
const left_arrow = document.querySelector('.l-arrow');
const d_img = document.querySelector('.default-img');
right_arrow.addEventListener("click", rClick);
left_arrow.addEventListener("click", lClick);
let img_length = imgs.length;
let n_slide = 2;
function rClick() {
// console.log(img_length);
if (n_slide != img_length) {
if (n_slide == 1) {
  n_slide++;
}
d_img.src = imgs[n_slide].src;
n_slide++;
}
else {
n_slide = 1;
d_img.src = imgs[n_slide].src;
console.log(n_slide);
}
}
let l_slide=1;
function lClick() 
{
if(n_slide==1 || n_slide==2)
{
n_slide=img_length+1;
}
d_img.src=imgs[n_slide-2].src;
n_slide--;
}
var stopInterval;
stopinterval = setInterval(changeimage, 3000);
function changeimage()
{
right_arrow.click();
}
function startAnim() {
if (stopinterval === null) { 
stopinterval = setInterval(changeimage, 3000);
}
}
function stopanim() {
if (stopinterval) { 
clearInterval(stopinterval);
stopinterval = null;
}
}
// faq section started
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');
for (i = 0; i < items.length; i++) {
items[i].setAttribute('aria-expanded', 'false');
}
if (itemToggle == 'false') {
this.setAttribute('aria-expanded', 'true');
}
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));
