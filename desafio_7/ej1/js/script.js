let edad = prompt("¡Bienvenido al login de ejemplo! \n Es necesario que indique su edad:");

if (edad >= 18) { // Correcto - True
    document.write('<h1 style="font-size: 60px; text-align: center;">BIENVENIDO</h1><br><p style="font-size: 40px; text-align: center;">El resto del login está en proceso</p>');
} else { // Incorrecto - False
    alert("ERROR. Eres menor de 18 años, no puedes continuar");
}
