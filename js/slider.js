(function(){

// propiedades
const propSlider ={
  slider: document.getElementById('slider'),
  primerSlider: null

}

// metodos
const metSlider ={
  inicio:function(){
    setInterval( metSlider.moverSlider, 3000);
  },
  moverSlider: function(){
      propSlider.slider.style.transition = 'all 1s ease';
      propSlider.slider.style.marginLeft = '-100%';

      setTimeout(function(){
        propSlider.primerSlider = propSlider.slider.firstElementChild;
        propSlider.slider.appendChild(propSlider.primerSlider);

        propSlider.slider.style.transition = 'all 0s ease 0s';
        propSlider.slider.style.marginLeft = 0;
      }, 1000);
  }
}

metSlider.inicio();
}())