const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
//inicializa carrito vacio
let carritoCompras = []
const lista = document.getElementById('lista')
//console.log(lista)

fetch("../data.json")
	.then((res) => res.json())
	.then((data) => {
		data.forEach((productoSolo) => {
			//console.log(productoSolo.id)
			//console.log(productoSolo.nombre)

			let contenedor = document.createElement("div");
			//crea lista de productos anillos
			contenedor.innerHTML = `
      <article class="card1">
      <img class="card__img" src="${productoSolo.imagen}" ></img>
      <p class="card__descripcion">${productoSolo.nombre}</p>
      <p class="card__descripcion">${productoSolo.precio}</p>
      <button id="${productoSolo.id}" class="card__button">Comprar</button>
      `;
			lista.append(contenedor);
		});
		//boton comprar
		let botonComprar = document.getElementById(`${productoSolo.id}`);
		//al hacer click agrega prodcutos al carrito
		botonComprar.addEventListener("click", () => {
			carritoCompras.push({
				id: productoSolo.id,
				imagen: productoSolo.imagen,
				nombre: productoSolo.nombre,
				precio: productoSolo.precio,
			});
			console.log(carritoCompras);
		});
		botonComprar.addEventListener("click", llamarSweet);
		function llamarSweet() {
			Swal.fire({
				title: "Producto Agredado 🛒",
				icon: "success",
				confirmButtonText: "Ok",
			});
		}
	});