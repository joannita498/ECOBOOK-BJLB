
			function mostrar(id){
			document.querySelector('.productos-container').style.display='none';
			document.querySelector('h1').style.display='none';
			document.getElementById(id).style.display='block';
			}

			function regresar(){
			document.querySelectorAll('.pagina-detalle').forEach(
			p=>p.style.display='none'
			);
			document.querySelector('.productos-container').style.display='grid';
			document.querySelector('h1').style.display='block';
			}
            
            document.getElementById("producto").addEventListener("change", function(){

			let precio =
			this.options[this.selectedIndex].getAttribute("data-precio");

			document.getElementById("precio").value = precio || "";

			});

			function agregarProducto(){

			let nombre = document.getElementById("nombre").value;
			let correo = document.getElementById("correo").value;
			let producto = document.getElementById("producto").value;
			let precio = parseFloat(document.getElementById("precio").value);
			let cantidad = parseInt(document.getElementById("cantidad").value);

			if(nombre == "" || correo == "" || producto == "" || cantidad == ""){
			alert("Complete todos los campos");
			return;
			}
if(!correo.includes("@")){
alert("Ingrese un correo válido con @");
return;
}

if(cantidad <= 0){
alert("La cantidad debe ser mayor a 0");
return;
}
			let totalProducto = precio * cantidad;

			let tbody = document.querySelector("#tablaProductos tbody");
			let filas = tbody.querySelectorAll("tr");

			let encontrado = false;

			filas.forEach(fila => {

			let correoFila = fila.cells[1].innerText;

			if(correoFila === correo){

			fila.cells[2].innerHTML += "<br>" + producto + " x" + cantidad;

				let totalActual = parseFloat(
fila.cells[3].innerText.replace("$","")
);

fila.cells[3].innerText =
"$" + (totalActual + totalProducto);

				encontrado = true;
				}

				});   // ← ESTA LÍNEA TE FALTA O ESTÁ MAL
				if(!encontrado){

				let fila = `
				<tr>
					<td>${nombre}</td>
					<td>${correo}</td>
					<td>${producto} x${cantidad}</td>
					<td>$${totalProducto}</td>
	<td>
    <button onclick="editar(this)">Modificar Producto</button>

    <button onclick="enviarCorreo(this)">
        Enviar
    </button>

    <button onclick="eliminar(this)">Eliminar</button>
</td>
				</tr>
				`;

				tbody.innerHTML += fila;
				}

				document.getElementById("producto").value = "";
				document.getElementById("precio").value = "";
				document.getElementById("cantidad").value = "";
            }

				function eliminar(btn){
				btn.parentElement.parentElement.remove();
				}

                function enviarCorreo(btn){

    let fila = btn.parentElement.parentElement;

    let nombre = fila.cells[0].innerText;
    let correo = fila.cells[1].innerText;
    let productos = fila.cells[2].innerText;
    let total = fila.cells[3].innerText;

    let destinatario = "ecobook.24.27@gmail.com";

    let asunto =
"Pedido Ecobook - " + nombre;

    let mensaje =
    "Nombre: " + nombre +
    "%0D%0ACorreo: " + correo +
    "%0D%0AProductos: " + productos +
    "%0D%0ATotal: " + total;

    window.location.href =
    "mailto:" + destinatario +
    "?subject=" + asunto +
    "&body=" + mensaje;
}
function nuevoCliente(){

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";

    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";

    document.getElementById("nombre").focus();
}

				function editar(btn){

    let fila = btn.parentElement.parentElement;

    let opcion = prompt(
    "Seleccione el número del nuevo producto:\n\n"+
    "1. Libreta Ecológica\n"+
    "2. Compartimiento Reciclado\n"+
    "3. Lápiz Ecológico\n"+
    "4. Separador Ecológico\n"+
    "5. Vela Aromática\n"+
    "6. Kit Básico Ecobook"
    );

    let productos = {

        1:["Libreta Ecológica",40],
        2:["Compartimiento Reciclado",12],
        3:["Lápiz Ecológico",12],
        4:["Separador Ecológico",15],
        5:["Vela Aromática",50],
        6:["Kit Básico Ecobook",100]

    };

    if(!productos[opcion]){
        alert("Opción no válida");
        return;
    }

    let cantidad = prompt(
        "Ingrese la nueva cantidad:"
    );

    if(cantidad == null || cantidad == ""){
        return;
    }
if(cantidad <= 0){
    alert("La cantidad debe ser mayor a 0");
    return;
}
    let producto = productos[opcion][0];
    let precio = productos[opcion][1];

  let totalActual =
parseFloat(fila.cells[3].innerText.replace("$",""));

let subtotalNuevo =
precio * cantidad;

fila.cells[2].innerText =
producto + " x" + cantidad;

fila.cells[3].innerText =
"$" + subtotalNuevo;
}
function nuevoCliente(){

    if(confirm("¿Desea registrar un nuevo cliente?")){

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";

        document.getElementById("producto").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("cantidad").value = "";

        document.getElementById("nombre").focus();
    }
}