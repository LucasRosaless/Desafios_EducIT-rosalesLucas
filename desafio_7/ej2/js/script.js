//Damos la bienvenida
confirm("Bienvenido al Login de JavaScript \n Ingrese sus datos");

//determinamos los datos
let usser = "admin"
let pass = "123"

//solicitamos la entrada de datos
let usuarioRecibido = prompt("Ingrese USUARIO:");
let passRecibido = prompt("Ingrese CONTRASEÑA:");

        //Validamos datos vacio
    if ((usuarioRecibido == "") || (passRecibido == "")) {

        alert("No proporciono datos, ingrese nuevamente");

        //Validamos datos correcto
    } else if ((usser == usuarioRecibido) && (pass == passRecibido)) {

        document.write('<h1 style="font-size: 60px; text-align: center;">BIENVENIDO</h1><br><p style="font-size: 40px; text-align: center;">El resto del login está en proceso</p>');

    } else {

        alert("DATOS INCORRECTOS \m intente nuevamente");

    }
