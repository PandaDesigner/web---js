
//--------------------------------------------------------------
/*section Metodos */
//--------------------------------------------------------------

const metCompnetWeb = {
    BlurbSection : document.getElementById('blurdSection'),
    WebSection: document.getElementById('web'),
    DisenoSection: document.getElementById('disenoUX'),
    arrayBluerb: array =>{
        array.map( parent =>{
        return metCompnetWeb.BlurbSection.innerHTML += `
                                                        <div class="blurb">
                                                            <i class="${parent.class}"></i>
                                                                <h3>${parent.name}</h3>
                                                            <p>${parent.desciption}</p>
                                                        </div>
                                                    `;
        })
    },
    arrayWeb:array => {
        array.map((parent)=>{
        return metCompnetWeb.WebSection.innerHTML += `
                                        <div class="item">
                                        <div class="col izq">
                                            <h3>${parent.titulo}</h3>
                                            <p>${parent.parrafo}</p>
                                        </div>
                                        <div class="col der">
                                            <p class="precio">${parent.precio}</p>
                                        </div>
                                    </div>
                                        `;
    })
    },
    arrayComponet : array =>{
        array.map((parent)=>{
            return metCompnetWeb.DisenoSection.innerHTML +=`
                                                <div class="item">
                                                    <div class="col izq">
                                                        <h3>${parent.titulo}</h3>
                                                        <p>${parent.parrafo}</p>
                                                    </div>
                                                    <div class="col der">
                                                        <p class="precio">${parent.precio}</p>
                                                    </div>
                                                </div>
                `;
        })
    }
}


//--------------------------------------------------------------
/*section propiedades */
//--------------------------------------------------------------

//OBJECT WEB
const propAllWeb = {
    propBlurb : [
        {
            class:'fa-solid fa-file-signature',
            name: 'Escribenos',
            desciption: 'pedro@pandadesigners.com'
        },
        {
            class:'fa-solid fa-people-robbery',
            name: 'Visítanos',
            desciption: 'En nuestras redes Sociales'
        },
        {
            class:'fa-solid fa-watch-fitness',
            name: 'Horario',
            desciption: '8am - 6pm <br/> Lunes - Sabados'
        }
    ],
    propiertWeb : [
        {
            titulo:'Sitio Web',
            parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
            precio: '$350'        
        },
        {
            titulo:'Landing Page',
            parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
            precio: '$200'        
        },
        {
            titulo:'Tienda Online',
            parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
            precio: '$500'        
        },
        {
            titulo:'Tienda especializada',
            parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
            precio: 'A consultar'
        }
    
    ],
    propiertComponetDesigners: [
        {
            titulo:'Diseño Grafico',
        parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
        precio: '$45'
        },
        {
            titulo:'Diseño de Logo',
            parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
            precio: '$50'
        },
        {
            titulo:'Diseño de de banner para paginas web',
            parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
            precio: '$35'
        },
        {
            titulo:'Diseño UX/UI',
            parrafo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis nesciunt, doloremque.',
            precio: 'a consultar'
        }
    ]
}



metCompnetWeb.arrayComponet(propAllWeb.propiertComponetDesigners)
metCompnetWeb.arrayWeb(propAllWeb.propiertWeb)
metCompnetWeb.arrayBluerb(propAllWeb.propBlurb)
