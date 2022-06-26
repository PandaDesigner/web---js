(function(){
//propierty Parallax

const propParallax = {
    section: document.querySelector('.parallax'),
    recorrido: null,
    limites: null

},
//Methods Parallax

methParallax = {
    inicio: ()=>{
        window.addEventListener('scroll', methParallax.scrollParallax)

    },
    scrollParallax: () =>{
        propParallax.recorrido = window.pageYOffset;
        propParallax.limites = propParallax.section.offsetTop + propParallax.section.offsetHeight;

        ( propParallax.recorrido > propParallax.section.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limites )?(propParallax.section.style.backgroundPositionY = (propParallax.recorrido - propParallax.section.offsetTop )/1.8 + 'px' ): propParallax.section.style.backgroundPositionY = 0
    }
}

methParallax.inicio();

}())