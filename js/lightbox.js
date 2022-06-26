(function(){

// propiedades del objeto
const propligthbox = {
  imgContainer: document.querySelectorAll(".lightbox"),
  imagen: null,
  imagenSrc: null,
  cuerpoDom: document.getElementsByTagName('body')[0],
  lightbox_container: null,
  modal: null,
  cerrarModal:null,
  animation: 'fade'
};
//los metodos del objeto
const metlightobox = {
  inicio: function () {
    propligthbox.imgContainer.forEach((item) =>
      item.addEventListener("click", metlightobox.capturaImagen)
    );
  },

  capturaImagen: function () {
    propligthbox.imagen = this;
    metlightobox.lightbox(propligthbox.imagen);
  },
  lightbox:function(imagen){
    propligthbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
    propligthbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
    propligthbox.lightbox_container = document.getElementById('lightbox_container');


    propligthbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
    propligthbox.modal = document.getElementById('modal');

    propligthbox.modal.style.heigth = '100%';

    propligthbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propligthbox.imagenSrc);
    propligthbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');

    if(propligthbox.animation === 'fade'){
      document.getElementsByClassName('imagen-modal')[0].style.opacity=0;
      setTimeout(()=>{
        document.getElementsByClassName('imagen-modal')[0].style.opacity=1;
      },50);
    }

    propligthbox.modal.innerHTML += '<i id= "cerrar_modal" class="fas fa-times"></i>'
    propligthbox.cerrarModal = document.getElementById('cerrar_modal');
    propligthbox.cerrarModal.addEventListener('click', metlightobox.cerrarModal)

  },
  cerrarModal:()=>{
    propligthbox.cuerpoDom.removeChild(propligthbox.lightbox_container);
  }
};
metlightobox.inicio();
}())
