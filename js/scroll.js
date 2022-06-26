const propScroll={
    positionScroll: window.pageYOffset,
    scrollSuave: document.getElementsByClassName('scroll-suave'),
    returTop: document.getElementsByClassName('retur-top'),
}
const { positionScroll, scrollSuave, returTop } = propScroll;


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
        e.preventDefault()
        console.log(this.innerHTML);

    },
    subir: function (e) {
        e.preventDefault()
        return console.log(this.innerHTML);
    }
}

const { inicio, moverse, subir }= metScroll;

inicio()