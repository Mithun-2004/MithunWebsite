let navbar = document.querySelector('.navbar')
let navbarList = document.querySelector('.navbar ul');
let bars = document.querySelector('#bars');
let cancelBtn = document.querySelector('#cancelBtn');
let pageLinks = document.querySelectorAll(".navbar ul li a")
let mainContainer = document.querySelector('.main');
let scrollBtn = document.querySelector('.scroll-btn')

function show(){
    navbarList.style.left = "0";
    bars.style.opacity = "0";
    bars.style.pointerEvents = "none";
}

function hide(){
    navbarList.style.left = "-100%";
    bars.style.opacity = "100";
    bars.style.pointerEvents = "auto";
}

bars.addEventListener('click', show)
cancelBtn.addEventListener('click', hide)

/* Sticky navigation Menu */
window.onscroll = function(){
    if (document.documentElement.scrollTop > 20){
        navbar.classList.add('active');
        scrollBtn.style.display = "block";

    }else{
        navbar.classList.remove('active');
        scrollBtn.style.display = "none";
    }
}

