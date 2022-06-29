const propScroll={
    posicion: window.pageYOffset,
    scrollSuave: document.getElementsByClassName('scroll-suave'),
    returTop: document.getElementsByClassName('retur-top'),
    destino: null,
    seccionDestino: null,
    intervalo: null,
}



const metScroll = {
    inicio: function () {

        for (const i in scrollSuave ) {
                scrollSuave[i].addEventListener('click', moverse );
                
        }

        for (const j in returTop ) {

                returTop[j].addEventListener('click', subir );

        }


    },
    moverse: function (e) {
        e.preventDefault();
        propScroll.destino = this.getAttribute('href');
        propScroll.seccionDestino = document.querySelector( propScroll.destino).offsetTop;
        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function (){

            if(propScroll.posicion < propScroll.seccionDestino ){

                propScroll.posicion += 1;

                if(popScroll.posicion >= propScroll.seccionDestino){
                    clearInterval(propScroll.intervalo);
                }
            }

            window.scrollTo(0, propScroll.posicion);

        }, 15);


        console.log(propScroll.seccionDestino, propScroll.destino);

    },

    subir: function (e) {
        e.preventDefault();

    }
}
const { posicion, scrollSuave, returTop, destino } = propScroll;
const { inicio, moverse, subir }= metScroll;

inicio()