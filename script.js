let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Web Developer'],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1200,
    loop:true,

});
// animatoin for menu 
const sr =ScrollReveal({
    distance:'40px',
    duration: 2500,
    reset:true
})
sr.reveal('.home-img',{delay:10,origin:'left'});
sr.reveal('.home-content',{delay:50,origin:'top'});
sr.reveal('.about-col-1',{delay:100,origin:'right'});
sr.reveal('.about-col-2',{delay:50,origin:'left'});
sr.reveal('.headin',{delay:500,origin:'top'});
sr.reveal('.tab-titles',{delay:300,origin:'bottom'});

sr.reveal('.about',{delay:10,origin:'left'});
sr.reveal('.about-img',{delay:10,origin:'top'});
sr.reveal('.contact',{delay:100,origin:'right'});


