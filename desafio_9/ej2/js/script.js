let empresa = [[], []];
let Planes = ["plan01", "plan02", "plan03"];
let interes1 = 0;
let interes2 = 0;
let interes3 = 0;
confirm("Bienvenido al Analisis de Creditos, Ingrese los datos");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

        cargaDatos(i, j, empresa);

    }
}

interes1 = calculInt(empresa, 0);
interes2 = calculInt(empresa, 1);
interes3 = calculInt(empresa, 2);

document.write("el interes de " + Planes[0] + "Es de" + interes1 + "<br> el interes de " + Planes[1] + "Es de" + interes2 + "<br> el interes de " + Planes[2] + "Es de" + interes3);


function cargaDatos(a, b, c) {
    if (b == 0) {
        c[[a], [b]] = parseFloat(prompt("Ingresa el capital del " + Planes[a]));
    } else if (b == 1) {
        c[[a], [b]] = parseFloat(prompt("Ingresa el plazo del " + Planes[a]));
    } else {
        c[[a], [b]] = parseFloat(prompt("Ingresa el tasa del " + Planes[a]));
    }
}

function calculInt(c, k) {
    let total = 0;
    total = ((c[[k], [0]]) * (c[[k], [1]]) * (c[[k], [2]])) / 100;
    return total;
}


/*
EJECICIO 2 MODULO 9
*/

let arryindividual = [];
arryindividual = unArray(empresa, 1, interes1);
console.log(arryindividual);

function unArray(c, k, int) {

    c2 = [[c[k], [0]], [c[k], [1]], [c[k], [2]], int];
    return c2;
}