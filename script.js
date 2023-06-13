const productos = [
  {nombre: "anillo con brillante", precio:850000},
  {nombre: "aretes dobles", precio: 350000},
  {nombre: "collar flor", precio: 350000},
 
];
let carrito = []
let seleccion = prompt("Bienvenido a Joyeria Sagitario, desea comprar algun producto si o no")
while (seleccion != "si" && seleccion != "no") {
       alert("Por favor ingrese si o no");
       seleccion =  prompt("Desea comprar algun producto si o no");
       break
      }
      if (seleccion == "si") {
        alert("Lista de productos")
        let todoslosProductos = productos.map(
          (producto) => producto.nombre + " " + "$" + producto.precio 
          );
          alert(todoslosProductos.join(" , "));
      }else if(seleccion == "no"){
        alert("Gracias por visitar nuestra joyeria, hasta pronto!")
      }
while(seleccion != "no"){
  let producto = prompt("Agrega un producto a tu carrito")
  let precio = 0

  if(producto == "anillo con brillante" || producto == "aretes dobles" || producto == "collar flor"){
    switch(producto){
      case "anillo con brillante":
      precio = 850000;
      break;
      case "aretes dobles":
        precio = 350000;
        break;
        case "collar flor":
          precio =350000;
          break;
          
      default:
        break;
    }
    let unidades = parseInt(prompt("Cantidad: "))
    carrito.push({producto, unidades, precio})
    console.log(carrito)
  }else{
    alert("Este producto no existe")
  }


const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0 ) //ecc: acomulador //el: elementos
console.log(`El total a pagar por su compra es: ${total}`)
alert("El total a pagar por su compra es: " + total )

seleccion = prompt("Desea seguir comprando?")
while(seleccion=== "no"){
  alert("Gracias por su compra, hasta pronto!")
  carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
    total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
  } )
break
}
}


let inputForm1 = document.getElementById("inputForm1")
let inputForm2 = document.getElementById("inputForm2")


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

