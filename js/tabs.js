(function(){
//propiedades

const propTabs = {

    primerEncabezado: document.getElementById('encabezado_menu').firstElementChild,
    primerContenido: document.getElementById('contenido_menu').firstElementChild,
    enlacesEncabezados: document.querySelectorAll('#encabezado_menu a'),
    encabezadoContenido: document.querySelectorAll('#contenido_menu > div'),
    contenidoActivo: null


}

//metodos 

const metTabs = {
    inicio: () => {

        propTabs.primerEncabezado.className = 'active',
        propTabs.primerContenido.className = 'active'
        

        propTabs.enlacesEncabezados.forEach((item) => item.addEventListener('click', metTabs.evento ))

    },
    evento: (e)=>{
        e.preventDefault();
        propTabs.enlacesEncabezados.forEach( (item) => item.className = '')
        propTabs.encabezadoContenido.forEach( (item) => item.className = '')

        e.target.className = 'active'
        propTabs.contenidoActivo = e.target.getAttribute('href');
        document.querySelector(propTabs.contenidoActivo).className = 'active';
        document.querySelector(propTabs.contenidoActivo).style.opacity = 0;
        setTimeout(()=>{
            document.querySelector(propTabs.contenidoActivo).style.opacity = 1;
        },100)
    }
}

metTabs.inicio();

}())