# ProyectoFinalReygadasG
Proyecto final JS
IMPLEMENTACIÓN PAGINA WEB JOYERIA
1- Con este código puede desarrolla las ventanas del catálogo de joyas, hacer que se visualice, hacer funcional el carrito de compras.
2.-Cree y desarrolle el formato de las ventanas html5 y css
3.-Las ventanas fueron enlazadas a su js respectivo en lanzando a través de …
Para el desarrollo de la venta anillos, aretes y collares con JS (anillo.js aretes.js, collares.js):
2-Para poder ver las actualizaciones que fui realizando cope live server

DESARROLLO
1.-Seleccione el elemento modal-container por medio del valor del atributo id que se encuentra en html(anillo.html, aretes.html, collares.html)
const modalContainer = document.getElementById("modal-container");

2.- Seleccione el elemento verCarrito por medio del valor del atributo id que se encuentra en html, en la parte:
const verCarrito = document.getElementById("verCarrito");

3.-Para el carrito de compras y parselo a formato JSON
let carritoCompras = JSON.parse(localStorage.getItem("listaProductos")) || [];
--html: <a class="nav-link" class="ver-carrito" id="verCarrito">🛒</a>(anillo.html, aretes.html, collares.html)
4.-Almacenar datos de manera local
let guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

5.-Seleccione el elemento contenedorProductos por medio del valor del atributo id que se encuentra en html
const lista = document.getElementById("contenedorProductos");

6.-Con el fetch para acceder y manipular los datos de .JSON (realice anillos, aretes y collares) y InnerHTML que permite cambiar el contenido de texto de un elemento de texto o consultar su valor, en mi caso la estructura de la lista de joyas

fetch("../data.json")
.then((res) => res.json()) //res:respuesta la parcea
.then((data) => {//todo lo que trae data lo recorre y
//cada elemento lo almacena en productosSolo
data.forEach((productoSolo) => {
//dentro del contenedor esta la lista de anillos
let contenedor = document.createElement("div");
//mostrar los productos de lista
contenedor.innerHTML = `     <article class="card1">
      <img class="card__img" src="${productoSolo.imagen}" ></img>
      <p class="card__descripcion">${productoSolo.nombre}</p>
      <p class="card__descripcion">${productoSolo.precio}</p>
      <button id="${productoSolo.id}" class="card__button">Comprar</button>
    `;

7.- Se llama a la lista .append nos permite adjuntar un objeto nodo o un DOMString
lista.append(contenedor);

8.-Configuración botón comprar
let botonComprar = document.getElementById(`${productoSolo.id}`);
//al hacer click agrega prodcutos al carrito
8.-Al hacer click en el botón comprar va a guardar los datos en la lista de productos
botonComprar.addEventListener("click", () => {
carritoCompras.push({
id: productoSolo.id,
imagen: productoSolo.imagen,
nombre: productoSolo.nombre,
precio: productoSolo.precio,
});
console.log(carritoCompras);
guardarLocal("listaProductos", JSON.stringify(carritoCompras));
});
9.-Implemente librería sweetalert

botonComprar.addEventListener("click", llamarSweet);
function llamarSweet() {
Swal.fire({
title: "Producto Agredado 🛒",
icon: "success",
confirmButtonText: "Ok",
});
}
});
10.-Al hacer click en el botón comprar, va crear el formato del carrito de compras

verCarrito.addEventListener("click", ()=>{
modalContainer.innerHTML = "";
modalContainer.style.display = "flex"
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";
modalHeader.innerHTML = `
			<h3 class="modal-header-title">Carrito de compras</h3>
			`;
//crea estructura carrito de compras
modalContainer.append(modalHeader)

10.-Formato del botón del carrito de compras

const modalbutton = document.createElement("h3");
modalbutton.innerText = "x"
modalbutton.className = "modal-header-button";
modalbutton.addEventListener("click", () => {
modalContainer.style.display = "none";
})
modalHeader.append(modalbutton)

11.-Estructura de los datos que va traer el carrito de compras al seleccionar un productor

carritoCompras.forEach((productoSolo)=>{
let carritoContent = document.createElement("div")
carritoContent.className = "modal-content"
carritoContent.innerHTML = `
					<img class="imagen-carrito" src="${productoSolo.imagen}">
					<p>${productoSolo.nombre}</p>
					<p>${productoSolo.precio}</p>
				`;
modalContainer.append(carritoContent)
});

12.-Realice el cálculo de total a pagar por los productos seleccionados

//aac:acomulador, el: representa a cada uno de los productos
const total = carritoCompras.reduce((acc, el) => acc + el.precio, 0);
const totalBuying = document.createElement("div")
totalBuying.className = "total-comtent"
totalBuying.innerHTML = `total a pagar: $ ${total} `;
modalContainer.append(totalBuying)
});
