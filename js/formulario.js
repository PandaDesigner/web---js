(function(){
// propiedades formulario
const d = document;
const propFormulario = {
    formulario: d.formulario_contacto,
    formElementos: d.formulario_contacto.elements,
    element: [],
    focusElements: null,
    blurElements: null,
    error: null,
    textoError: null
}
const { formulario, formElementos, element, focusElements,blurElements,error, textoError } = propFormulario
// metdos del formulario
const methFormulario ={
    inicio: function () {
        for (const index in formElementos) {
           if(formElementos[index].type == 'text' || formElementos[index].type == 'email' || formElementos[index].type == 'textarea'){
            formElementos[index].addEventListener('focus', focusInput)
            formElementos[index].addEventListener('blur', blurInput)

        }}
        formulario.addEventListener('submit', validarInput)
    },
    focusInput: function(){

        this.parentElement.children[1].className = 'label active';
    },
    blurInput: function(){

        (this.value != '')? this.parentElement.children[1].className = 'label active': this.parentElement.children[1].className = 'label';
    },

    validarInput: (e) =>{
        for (const index in formElementos) {
            if(formElementos[index].value == ''){ 

                e.preventDefault();

                if(formElementos[index].parentElement.children.length <3 ){

                propFormulario.error = d.createElement('p');
                propFormulario.textoError = d.createTextNode(`Por favor llena el campo con tu ${propFormulario.formElementos[index].name}`);
                propFormulario.error.appendChild(propFormulario.textoError);
                propFormulario.error.className = 'error';
                propFormulario.formElementos[index].parentElement.appendChild(propFormulario.error);
                }


            }else{
                    if(formElementos[index].parentElement.children.length >= 3){
                        propFormulario.error = formElementos[index].parentElement.getElementsByTagName('p')[0];
                        formElementos[index].parentElement.removeChild(propFormulario.error);
                    }
    
                
            }

        }
    }
}

const {inicio, focusInput, blurInput, validarInput} = methFormulario
methFormulario.inicio();

});