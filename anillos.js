console.log("hola probando proyecto joyas");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const productos = [
    {
        id: 1,
        nombre: "Anillo de oro blanco con brillante",
        precio: 890000,
        imagen: "../img/01.jpg",
    },
    {
        id: 2,
        nombre: "Anillo líneas entrelazadas de oro blanco",
        precio: 1000000,
        imagen: "../img/2.jpg",
    },
    {
        id: 3,
        nombre: "Anillo de brillantes recubierto con oro blanco",
        precio: 750000,
        imagen: "../img/4.jpg",
    },
    {
        id: 4,
        nombre: "Argollas de compromiso de oro de 14k",
        precio: 750000,
        imagen: "../img/anillo1.jpg",
    },
    {
        id: 5,
        nombre: "Anillo con diamante al medio y brillantes de plata",
        precio: 350000,
        imagen: "../img/anillo5.jpg",
    }
]
let carritoCompras = []

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));
let anillo1 = JSON.parse(localStorage.getItem("1"))
console.log(anillo1)


let contenedorProductos = document.getElementById("contenedorProductos")


console.log(contenedorProductos)
productos.forEach((productoSolo)=>{
  console.log(productoSolo.id)
  console.log(productoSolo.nombre)


  let contenedor = document.createElement("div")
  contenedor.innerHTML = `
  <article class="card1">
  <img class="card__img" src="${productoSolo.imagen}" ></img>
  <p class="card__descripcion">${productoSolo.nombre}</p>
  <p class="card__descripcion">${productoSolo.precio}</p>
  <button id="${productoSolo.id}" class="card__button">Comprar</button>
  `
  
 contenedorProductos.append(contenedor)
 //let miDiv = document.createElement("div")

 let botonComprar = document.getElementById(`${productoSolo.id}`)
  botonComprar.addEventListener("click", () =>{
    carritoCompras.push({
        id: productoSolo.id,
        imagen: productoSolo.imagen,
        nombre: productoSolo.nombre,
        precio : productoSolo.precio,

    });
    console.log(carritoCompras)
    
});

});
verCarrito.addEventListener("click", ()=>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h3 class="modal-header-title">Carrito de compras</h3>
    `;
    modalContainer.append(modalHeader)
    const modalbutton = document.createElement("h3");
    modalbutton.innerText = "x"
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton)

    carritoCompras.forEach((productoSolo)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML =  `
            <img class="imagen-carrito" src="${productoSolo.imagen}">
            <p>${productoSolo.nombre}</p>
            <p>${productoSolo.precio}</p>
        `;
        modalContainer.append(carritoContent)
    });
        //aac:acomulador, el: representa a cada uno de los productos
    const total = carritoCompras.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-comtent"
    totalBuying.innerHTML = `total a pagar: $ ${total} `;
    modalContainer.append(totalBuying)

});
 