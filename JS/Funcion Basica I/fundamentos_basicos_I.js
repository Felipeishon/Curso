/*1) Escribe una función que devuelve un array con todos los números del 1 al 255 */

function devolverArray(x) {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    console.log(arr)
}

devolverArray();

/*2) Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. */

function sumaPares(x) {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
sumaPares();

/*3) Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999). */

function sumaImpares(x) {
    var sum = 0;
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(sum)
}

sumaImpares();

/*4) Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). */

function sumaArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    console.log(sum);
}

sumaArray([1, 2, 5])

/*5) Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).  */

function valorMax(x) {
    var max = x[0];
    for (var i = 1; i < x.length; i++) {
        if (max < x[i]) {
            max = x[i];
        }
    }
    console.log(max)
}

valorMax([-3, 3, 5, 7])

/*6) Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2). */

function promedio(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    console.log("El promedio de la array es: ", sum / x.length)
}

promedio([1, 3, 5, 7, 20])

/*7) Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. */

function arrayImpares() {
    var arr = [];
    for (var i = 0; i <= 50; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    console.log(arr)
}

arrayImpares();

/*8) Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).  */

function mayorQueY(x, y) {
    console.log("Los valores de la array mayores que y son: ")
    for (var i = 0; i < x.length; i++) {
        if (x[i] > y) {
            console.log(x[i])
        }
    }
}

mayorQueY([1, 3, 5, 7], 3)

/*9) Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]). */

function cuadradoArray(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = (x[i] * x[i])
    }
    console.log(x);
}

cuadradoArray([1, 5, 10, -2])

/*10) Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */

function numerosNegativos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    console.log(x);
}

numerosNegativos([1, 5, 10, -2])

function maxminAve(x) {
    var max = x[0];
    var min = x[0];
    var ave = 0;
    var arr = [];
    //maximo
    for (var i = 1; i < x.length; i++) {
        if (max < x[i]) {
            max = x[i];
        }
    }
    //minimo
    for (var k = 1; k < x.length; k++) {
        if (min > x[k]) {
            min = x[k];
        }
    }
    //suma para promedio
    for (var j = 0; j < x.length; j++) {
        ave += x[j];
    }

    arr.push(max, min, (ave / x.length));
    console.log(arr);
}

maxminAve([1, 5, 10, -2])

/*12) Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).  */

function intercambiarValores(x) {
    if (x.length >= 2) {
        var aux = 0;
        for (var i = 0; i < (x.length / 2); i++) {
            aux = x[x.length - 1 - i];
            x[x.length - 1 - i] = x[i];
            x[i] = aux;
        }
    } else {
        console.log("El array debe tener a lo menos 2 valores, agrega mas valores al array")
    }
    console.log(x)
}

intercambiarValores([1, 5, 10, -2])

/*13) Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]. */

function sobrescribirNegativos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'Dojo';
        }
    }
    console.log(x)
}

sobrescribirNegativos([-1, -3, 2])