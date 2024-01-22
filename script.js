// const navToggle = document.querySelector('.nav-toggle');
 
// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });
 

const nav = document.querySelector(".primary-navigation");
// console.log(nav)
const navToggle = document.querySelector('.mobile-nav-toggle');

// when someone clicks hamburger buton 
navToggle.addEventListener('click', ()=>{

  const visibility = nav.getAttribute("data-visible") ;

  // if the nav closed - opon 
  if(visibility === "false"){
    nav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
  } else {
// if open - close 
nav.setAttribute("data-visible", false)
navToggle.setAttribute("aria-expanded", false) 
  }})