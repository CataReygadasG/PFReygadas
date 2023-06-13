let inputForm1 = document.getElementById("inputForm1")
let inputForm2 = document.getElementById("inputForm2")
let inputForm3 = document.getElementById("inputForm3")

let botonValor = document.getElementById("botonValor")
botonValor.addEventListener("click", mostrarValorDatos)


function mostrarValorDatos(){

    console.log("probando valores inputs")
    console.log(inputForm1.value)
    console.log(inputForm2.value)
    console.log(inputForm3.value)

}

inputForm2.addEventListener("change",mostrarValor)

function mostrarValor() {

    console.log("mostrar valor")
}




let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);  
}

