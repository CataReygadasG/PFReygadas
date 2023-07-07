const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
localStorage.clear();
let carritoCompras = JSON.parse(localStorage.getItem("listaProductos")) || [];
let guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
const listaA = document.getElementById("contenedorProductos");

fetch("../data2.json")
.then((res) => res.json())
.then((data) => {
	data.forEach((productoA) => {
		let contenedorA = document.createElement("div");
		contenedorA.innerHTML = `
		<article class="card1">
		<img class="card__img" src="${productoA.imagen}" ></img>
		<p class="card__descripcion">${productoA.nombre}</p>
		<p class="card__descripcion">${productoA.precio}</p>
		<button id="${productoA.id}" class="card__button">Comprar</button>
		`;
			  listaA.append(contenedorA);
  
			  let botonComprar = document.getElementById(`${productoA.id}`);
			  //al hacer click agrega prodcutos al carrito
			  botonComprar.addEventListener("click", () => {
				  carritoCompras.push({
					  id: productoA.id,
					  imagen: productoA.imagen,
					  nombre: productoA.nombre,
					  precio: productoA.precio,
				  });
				  console.log(carritoCompras);
				  guardarLocal("listaProductos", JSON.stringify(carritoCompras));
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

			const modalbutton = document.createElement("h3");
			modalbutton.innerText = "x"
			modalbutton.className = "modal-header-button";
		
			modalbutton.addEventListener("click", () => {
				modalContainer.style.display = "none";
			})
		
			modalHeader.append(modalbutton)
		
			carritoCompras.forEach((productoA)=>{
				let carritoContent = document.createElement("div")
				carritoContent.className = "modal-content"
				carritoContent.innerHTML =  `
					<img class="imagen-carrito" src="${productoA.imagen}">
					<p>${productoA.nombre}</p>
					<p>${productoA.precio}</p>
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



	});