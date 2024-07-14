//se solicita el ingreso de el presupuesto inicial
let ingresoTotal = parseFloat(prompt("Ingrese El total del Presupuesto"));

//calculamos los valores del presupuesto
let pres1 = ingresoTotal * 0.5;
let pres2 = ingresoTotal * 0.3;
let pres3 = ingresoTotal * 0.2;

//informamos los valores
document.write("VALOR DEL INGRESO TOTAL  100" + ingresoTotal);

document.write("<br> El presupuesto al <strong> 50% </strong>: " + pres1 + "<br> El presupuesto al <strong> 30% </strong> : "+pres2+"<br> El presupuesto al <strong>20% </strong> : "+pres3);