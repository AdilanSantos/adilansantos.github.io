var typingEffect = new Typed(".multiText",{
    strings: ["adilan santos","desenvolvedor jr","lindo"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})


/** MENU MOBILE */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const menuOptions = document.querySelector(".navItems");

function toggleMenu(event){
    nav.classList.toggle('active');
}

hamburger.addEventListener("click",toggleMenu);

menuOptions.addEventListener("click", toggleMenu)




