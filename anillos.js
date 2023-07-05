const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
//inicializa carrito vacio
let carritoCompras = [];
//creamod la lista de productos
const lista = document.getElementById("contenedorProductos");

//llamada asincronica lista de anillos, me conecto
fetch("../data.json")
	.then((res) => res.json()) //res:respuesta la parcea
	.then((data) => {//todo lo que trae data lo recorre y 
		//cada elemento lo almacena en productosSolo
		data.forEach((productoSolo) => {
			//dentro del contenedor esta la lista de anillos
			let contenedor = document.createElement("div");
			//mostrar los productos de lista
			contenedor.innerHTML = `
      <article class="card1">
      <img class="card__img" src="${productoSolo.imagen}" ></img>
      <p class="card__descripcion">${productoSolo.nombre}</p>
      <p class="card__descripcion">${productoSolo.precio}</p>
      <button id="${productoSolo.id}" class="card__button">Comprar</button>
      `;
			lista.append(contenedor);

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
				//almacenamos los productos del carrito de compras, llamando a carritoCompras=[]
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



	});