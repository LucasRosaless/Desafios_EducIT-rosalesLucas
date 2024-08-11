let flujoCaja = Array.from({ length: 12 }, () => Array(2).fill(0)); //Pedido a IA por no funcionar let flujoCaja = [[], []];

let month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let ingresosTotal = 0;
let egresosTotal = 0;

confirm("Bienvenido al Flujo de caja de ArgenFin, Ingresa los valores solicitados");

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 2; j++) {
        enterNum(i, j, flujoCaja);
    }
}

ingresosTotal = suma(flujoCaja, 0);
egresosTotal = suma(flujoCaja, 1);

if (ingresosTotal > egresosTotal) {
    alert("Empresa Sin perdidas, Cumple con las condiciones");
} else if (ingresosTotal == egresosTotal) {
    alert("Empresa no tiene perdidas ni ingresos");
} else {
    alert("Empresa tiene perdidas, No recomendable");
}



//FUNCIONES
    function enterNum(a, b, c) {
        if (b == 0) {
            c[a][b] = parseFloat(prompt("Ingresa los Ingresos del mes de " + month[a]));
        } else {
            c[a][b] = parseFloat(prompt("Ingresa los Egresos del mes de " + month[a]));
        }
    }

    function suma(c, k) {
        let total = 0;
        for (let i = 0; i < 12; i++) {
            total += c[i][k];
        }
        return total;
    }


