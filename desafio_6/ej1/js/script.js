// Definimos Variables como buena practica
let costosFijos = 0;
let precioVenta = 0;
let costosVariables = 0; 

/*  Solicitamos los datos al usuario y los pasamos a Int , 
 Puede pasarse a float para evitar errores  */
costosFijos = parseInt(prompt("Ingrese el Costo Fijo"));
precioVenta = parseInt(prompt("Ingrese el Precio Venta"));
costosVariables = parseInt(prompt("Ingrese los Costos Variables"));

// Realizamos la operacion
let CV = costosFijos / (precioVenta - costosVariables);

// Mostramos el resultado en HTML
document.write(CV);

