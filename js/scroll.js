const propScroll = {
  posicion: window.pageYOffset,
  scrollSuave: document.getElementsByClassName('scroll-suave'),
  returTop: document.getElementsByClassName('retur-top'),
  destino: null,
  seccionDestino: null,
  intervalo: null
}

const metScroll = {
  inicio: function () {
    for (const i = 0; i < scrollSuave.length; i++) {
      scrollSuave[i].addEventListener('click', moverse)
    }
    for (const j = 0; j < returTop.length; j++) {
      returTop[j].addEventListener('click', subir)
    }
  },
  moverse: function (e) {
    e.preventDefault()
    propScroll.destino = this.getAttribute('href')
    propScroll.seccionDestino = document.querySelector(
      propScroll.destino
    ).offsetTop - 94
    propScroll.posicion = window.pageYOffset
    propScroll.intervalo = setInterval(
      function () {
        if (propScroll.posicion < propScroll.seccionDestino) {
          propScroll.posicion += 15
          if (propScroll.posicion >= propScroll.seccionDestino) {
            clearInterval(propScroll.intervalo)
          }
        } else {
          propScroll.posicion -= 15
        }

        window.scrollTo(0, propScroll.posicion)
      },
      15)

    console.log(propScroll.seccionDestino, propScroll.destino)
  },

  subir: function (e) {
    e.preventDefault()
    propScroll.posicion = window.pageYOffset
    propScroll.intervalo = setInterval(function () {
      if (propScroll.posicion > 0) {
        propScroll.posicion -= 15
      }
      window.scrollTo(0, propScroll.posicion)
    }, 15)
    console.log(this.innerHTML)
  }
}
const { posicion, scrollSuave, returTop, destino } = propScroll
const { inicio, moverse, subir } = metScroll

inicio()
