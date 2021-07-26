/*1) Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5]. */

function sobrescribirPositivos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = 'big';
        }
    }
    console.log(x)
}

sobrescribirPositivos([-1, 3, 5, -5])

/*2) Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. */

function minMax(x) {
    var min = x[0];
    var may = x[0];

    //maximo
    for (var i = 1; i < x.length; i++) {
        if (may < x[i]) {
            may = x[i];
        }
    }
    //minimo
    for (var k = 1; k < x.length; k++) {
        if (min > x[k]) {
            min = x[k];
        }
    }

    console.log(min);
    return may;
}

console.log(minMax([1, 3, 6, 3, 8, 9]))

/*3) Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar. */

function penultimoPrimero(x) {
    var penultimo = x[x.length - 2];
    console.log(penultimo);
    var impar = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            impar = x[i];
            break;
        }
    }
    return impar;
}

console.log(penultimoPrimero([2, 3, 4, 6, 8, 9]));

/*4) Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. */

function dobleArray(x) {
    var arr = [];
    for (var i = 0; i < x.length; i++) {
        arr.push((x[i] * 2));
    }
    console.log(arr);
}

dobleArray([1, 2, 3])

/*5) Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3]. */

function sumarPositivos(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            sum++;
        }
    }
    x.push(sum);
    console.log(x);
}

sumarPositivos([-1, 1, 1, 1])

/*6) Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”. */

function tresSeguidos(x) {
    var par = 0;
    var impar = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            par++;
            impar = 0;
            if (par === 3) {
                console.log("¡Es para bien!")
            }
        } else if (x[i] % 2 !== 0) {
            impar++;
            par = 0;
            if (impar === 3) {
                console.log("¡Qué imparcial!")
            }
        }
    }
}

tresSeguidos([1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 3])

/*7) Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr.  */

function masImpar(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i] += 1
        }
    }
    console.log(array)
}

masImpar([1, 2, 3, 4, 5, 6])

/*8) Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número 
de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver 
[“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante? */

function longitudPrevia(x) {
    var lon = 0;
    for (var i = (x.length - 1); i > 0; i--) {
        lon = x[i - 1].length;
        x[i] = lon;
    }
    console.log(x);
}

longitudPrevia(["programar", "dojo", "genial"])

/*9) Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno.
No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.  */

function masSiete(array) {
    var arr = array;
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 7;
    }
    console.log(arr)
}

masSiete([1, 2, 3])

/*10) Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3].
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores). */

function arrayInverso(array) {
    var aux = 0;
    for (var i = 0; i < (array.length / 2); i++) {
        aux = array[(array.length - 1 - i)];
        array[(array.length - 1 - i)] = array[i];
        array[i] = aux;
    }
    console.log(array);
}

arrayInverso([3, 1, 6, 4, 2, 8]);

/*11) Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5]. */

function arrayNegativo(array) {
    var arr = array;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= -1;
        }
    }
    console.log(arr);
}

arrayNegativo([1, -3, 5])

/*12) Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. */

function tengoHambre(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "comida") {
            console.log("yummy");
            count += 1;
        }
    }
    if (count == 0) {
        console.log("tengo hambre");
    }
}

tengoHambre(["comida", "chocolate", "cafe", "comida", "manzana"]);

/*13) Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) 
cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) 
el array esta vez. */
// esta opcion solo funbciona para una array con cierta cantidad de elementos, si la array tiene muchos elementos, no intercambia todos los valores.
function haciaElCentro(array) {
    var prim = [];
    var terc = [];
    prim = array[array.length - 1];
    array[array.length - 1] = array[0];
    array[0] = prim;

    terc = array[(array.length / 2)];
    array[(array.length / 2)] = array[(array.length / 2) - 1];
    array[(array.length / 2) - 1] = terc;
    console.log(array);
}

haciaElCentro([1, 2, 3, 4, 5, 6]);
//esta opcion son menos lineas, con i < array.length / 2 llegamos hasta la mitad del array y con el contador i += 2 se salta una posicion en el array para llegar al siguiente como decia el enunciado
function haciaElCentro2(array) {
    for (var i = 0; i < array.length / 2; i += 2) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
console.log(haciaElCentro2([1, 2, 3, 4, 5, 6]));

/*14) Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9]. */

function escalaArray(array, num) {
    for (var i = 0; i < array.length; i++) {
        array[i] *= num;
    }
    console.log(array);
}

escalaArray([1, 2, 3], 3)