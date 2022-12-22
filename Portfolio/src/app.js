const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const btnSessao = document.querySelector('.btn-Menu');
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const menuItems = document.querySelectorAll('.menu a[href^="#"]')
const menuItemsMobile =  document.querySelectorAll(' .mobile-menu a[href^="#"]')
const btnSobre = document.querySelector('.btn-Sobre')
/* Animação de Scroll as Sessões de forma suave */

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
});

btnSobre.addEventListener('click', scrollToIdOnClickSobre);

menuItemsMobile.forEach(item => {
    item.addEventListener('click', scrollToIdOnClickMobile)
});

function scrollToIdOnClick(event) {
    event.preventDefault();
    const elementTarget = event.target;
    const idHtml = elementTarget.getAttribute('href');
    const to = document.querySelector(idHtml).offsetTop;

    window.scroll({
        top: to - 80,
        behavior: "smooth"
    })
}

function scrollToIdOnClickSobre(event) {
    console.log(event)
    event.preventDefault();
    const to = document.querySelector('#sobre').offsetTop;

    window.scroll({
        top: to - 80,
        behavior: "smooth"
    })
}

function scrollToIdOnClickMobile(event) {
    event.preventDefault();
    const elementTarget = event.target;
    const idHtml = elementTarget.getAttribute('href');
    const to = document.querySelector(idHtml).offsetTop;
    
    mobileMenu.classList.toggle('is-open')
    menuBtn.classList.toggle('is-active');

    window.scroll({
        top: to - 80,
        behavior: "smooth"
    })
}

/* xibir as sessões de forma animada */


function animeScroll(){
    const windowTop= window.pageYOffset + ( (window.innerHeight * 3) /4 );
    target.forEach(function(element){
        if ( (windowTop) > element.offsetTop ){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
        
    })
}

animeScroll();

if (target.length ){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}

/* Exibir Menu Mobile */
menuBtn.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
});

/* Exibir Descrição da Experiencia */
var listaEmpresa = document.getElementById("menuEmpresa");
var empresa = listaEmpresa.getElementsByClassName("empresa");

var listaDescricao = document.getElementById("exp-text");
var descricao = listaDescricao.getElementsByClassName("showExp");

for (var k = 0; k < empresa.length; k++ ){
    empresa[k].addEventListener('click', function(){

        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.classList.toggle('active')

        var current2 = listaDescricao.getElementsByClassName("is-active");
        current2[0].className = current2[0].className.replace("is-active", "");
        
        if (this.innerHTML == 'Estagio'){
            descricao[0].classList.toggle('is-active')
        }
        
        else if (this.innerHTML == 'Keruak'){
            descricao[1].classList.toggle('is-active')
        }

        else if (this.innerHTML == 'Desk Manager'){
            descricao[2].classList.toggle('is-active')
        }

    });
}

/* Evento de click no Menu */
/*
var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn-Menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("is-active");
    current[0].className = current[0].className.replace("is-active", "");
    this.className += " is-active";
  });
}
*/

/* Evento da Experiencia */



/* Evento de animação : digitar */
var paragrafo = document.querySelector('.line')
var texto = paragrafo.innerHTML
var index = 0

const escrever = () =>{

    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

    if (texto.length > index){
        
        if (index == 0) {
            paragrafo.innerHTML = texto.charAt(index)
        } else{
            paragrafo.innerHTML += texto.charAt(index)
        }

        paragrafo.innerHTML += '|'

        index++
        setTimeout(escrever, 200)
    }
    else{
        paragrafo.innerHTML += ';'
    }
}

escrever()