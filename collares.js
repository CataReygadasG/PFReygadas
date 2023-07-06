const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
//localStorage.clear();
let carritoCompras = JSON.parse(localStorage.getItem("listaProductos")) || [];
let guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
const listaA = document.getElementById("contenedorProductos");

fetch("../data3.json")
.then((res) => res.json())
.then((data) => {
	data.forEach((productoC) => {
		let contenedorC = document.createElement("div");
		contenedorC.innerHTML = `
		<article class="card1">
		<img class="card__img" src="${productoC.imagen}" ></img>
		<p class="card__descripcion">${productoC.nombre}</p>
		<p class="card__descripcion">${productoC.precio}</p>
		<button id="${productoA.id}" class="card__button">Comprar</button>
		`;
			  listaA.append(contenedorA);
  
			  let botonComprar = document.getElementById(`${productoC.id}`);
			  //al hacer click agrega prodcutos al carrito
			  botonComprar.addEventListener("click", () => {
				  carritoCompras.push({
					  id: productoC.id,
					  imagen: productoC.imagen,
					  nombre: productoC.nombre,
					  precio: productoC.precio,
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
		
			carritoCompras.forEach((productoC)=>{
				let carritoContent = document.createElement("div")
				carritoContent.className = "modal-content"
				carritoContent.innerHTML =  `
					<img class="imagen-carrito" src="${productoC.imagen}">
					<p>${productoC.nombre}</p>
					<p>${productoC.precio}</p>
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