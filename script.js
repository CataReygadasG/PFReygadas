// const productos = [
//   {id: 1, nombre: "anillo con brillante", precio:850000},
//   {id: 2, nombre: "aretes dobles", precio: 350000},
//   {id: 3, nombre: "collar flor", precio: 350000},
 
// ];


// //------------------------------
// let carrito = []
// let seleccion = prompt("Bienvenido a Joyeria Sagitario, desea comprar algun producto si o no")
// while (seleccion != "si" && seleccion != "no") {
//        alert("Por favor ingrese si o no");
//        seleccion =  prompt("Desea comprar algun producto si o no");
//        break
//       }
//       if (seleccion == "si") {
//         let usuarioLocalStorage = prompt("Ingrese su nombre: ")
//         localStorage.setItem("usuarioX", usuarioLocalStorage)
//         let usuarioRecuperadoX= localStorage.getItem("usuarioX")
//         console.log(usuarioRecuperadoX)

//         alert("Lista de productos")
//         let todoslosProductos = productos.map(
//           (producto) => producto.nombre + " " + "$" + producto.precio 
//           );
//           alert(todoslosProductos.join(" , "));
//       }else if(seleccion == "no"){
//         alert("Gracias por visitar nuestra joyeria, hasta pronto!")
//       }
// while(seleccion != "no"){
//   let producto = prompt("Agrega un producto a tu carrito")
//   let precio = 0

//   if(producto == "anillo con brillante" || producto == "aretes dobles" || producto == "collar flor"){
//     switch(producto){
//       case "anillo con brillante":
//       precio = 850000;
//       break;
//       case "aretes dobles":
//         precio = 350000;
//         break;
//         case "collar flor":
//           precio =350000;
//           break;
          
//       default:
//         break;
//     }
//     let unidades = parseInt(prompt("Cantidad: "))
//     carrito.push({producto, unidades, precio})
//     console.log(carrito)
//   }else{
//     alert("Este producto no existe")
//   }


// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0 ) //ecc: acomulador //el: elementos
// console.log(`El total a pagar por su compra es: ${total}`)
// alert("El total a pagar por su compra es: " + total )

// seleccion = prompt("Desea seguir comprando?")
// while(seleccion=== "no"){
//   alert("Gracias por su compra, hasta pronto!")
//   carrito.forEach((carritoFinal) => {
//     console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
//     total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
//   } )
// break
// }
// }









