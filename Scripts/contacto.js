
const KEY = "registrosContactoEcobook";
const tabla = document.getElementById("cuerpo-tabla");
const btnEliminarTodos = document.getElementById("btn-eliminar-todos");
const form = document.getElementById("form-contacto");
const obtenerRegistros = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

const guardarRegistros = (datos) => {
    localStorage.setItem(KEY, JSON.stringify(datos));
};
function mostrarRegistros(){
    const registros = obtenerRegistros();
    tabla.innerHTML = "";

    if(registros.length === 0){
        tabla.innerHTML = `
        <tr>
            <td colspan="6">No hay registros aún.</td>
        </tr>
        `;
        return;
    }

    registros.forEach((r, i) => {
        tabla.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${r.fecha}</td>
            <td>${r.nombre}</td>
            <td>${r.correo}</td>
            <td>${r.mensaje}</td>
            <td>
                <button class="btn-editar" onclick="editar(${i})">Editar</button>
                <button class="btn-eliminar" onclick="eliminar(${i})">Eliminar</button>
            </td>
        </tr>
        `;
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const nuevo = {
        nombre: nombre.value,
        correo: correo.value,
        mensaje: mensaje.value,
        fecha: new Date().toLocaleString()
    };
    const registros = obtenerRegistros();
    registros.push(nuevo);
    guardarRegistros(registros);
    alert("Registro guardado correctamente");
    form.reset();
    mostrarRegistros();

    const asunto = "Nuevo Registro Ecobook";

    const cuerpo =
    "Nombre: " + nuevo.nombre +
    "\nCorreo: " + nuevo.correo +
    "\nMensaje: " + nuevo.mensaje +
    "\nFecha: " + nuevo.fecha;

    window.location.href =
    "mailto:ecobook.24.27@gmail.com" +
    "?subject=" + encodeURIComponent(asunto) +
    "&body=" + encodeURIComponent(cuerpo);
    form.reset();
});

function eliminar(i){
    if(!confirm("¿Eliminar este registro?")) return;
    const registros = obtenerRegistros();
    registros.splice(i, 1);
    guardarRegistros(registros);
    mostrarRegistros();
}

function editar(i){
    const registros = obtenerRegistros();
    const nuevoNombre = prompt("Modificar nombre:", registros[i].nombre);
    const nuevoCorreo = prompt("Modificar correo:", registros[i].correo);
    const nuevoMensaje = prompt("Modificar mensaje:", registros[i].mensaje);

    if(nuevoNombre && nuevoCorreo && nuevoMensaje){
        registros[i].nombre = nuevoNombre;
        registros[i].correo = nuevoCorreo;
        registros[i].mensaje = nuevoMensaje;
        guardarRegistros(registros);
        alert("Registro modificado correctamente");
        mostrarRegistros();
    }
}

mostrarRegistros();
