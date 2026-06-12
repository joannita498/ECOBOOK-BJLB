
document.body.addEventListener("click", function(){
    var audio =
    document.getElementById("audioLogin");
    audio.play();

},{
    once:true
});

var usuarioCorrecto = "admin";
var passwordCorrecta = "1234";
var intentos = 3;
var bloqueado = false;

function login(){
    var usuario =
    document.getElementById("usuario").value;

    var password =
    document.getElementById("password").value;

    if(usuario == "" || password == ""){

    document.getElementById("mensaje").innerHTML =
    "Debe ingresar usuario y contraseña";

    document.getElementById("mensaje").style.color =
    "#ffd700";

    return;
}
    if(bloqueado){

        document.getElementById("mensaje").innerHTML =
        "Cuenta bloqueada";

        return;
    }

    var usuario =
    document.getElementById("usuario").value;

    var password =
    document.getElementById("password").value;

    if(usuario == usuarioCorrecto &&
       password == passwordCorrecta){

        document.getElementById("mensaje").innerHTML =
        "Acceso permitido";

        document.getElementById("mensaje").style.color =
        "#00ff88";

        setTimeout(function(){
        window.location.href = "index.html";
    }, 1000);

    }else{

        intentos = intentos - 1;

        document.getElementById("mensaje").innerHTML =
        "Usuario o contraseña incorrectos";

        document.getElementById("mensaje").style.color =
        "#ff6b6b";

        document.getElementById("intentos").innerHTML =
        "Intentos restantes: " + intentos;

        if(intentos <= 0){

            bloqueado = true;

            document.getElementById("mensaje").innerHTML =
            "Cuenta bloqueada por demasiados intentos";

            document.querySelector("button").disabled = true;

            document.querySelector("button").style.opacity =
            "0.5";
        }
    }
}