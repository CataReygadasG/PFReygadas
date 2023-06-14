console.log("hola probando proyeto joyas")
const productos = [
    {
        id: 1,
        nombre: "Anillo de oro blanco con brillante",
        precio: 890000,
        imagen: "../img/1.jpg",
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

console.log(productos)

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
  <a href="#" class="card__button">Ver más</a>
  `
 contenedorProductos.append(contenedor)

})

let miDiv = document.createElement("div")