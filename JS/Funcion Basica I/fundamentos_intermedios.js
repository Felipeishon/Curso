/*1) Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5). */

function sigma(x) {
    var arr = [];
    var sum = 0;
    for (var i = 1; i <= x; i++) {
        arr.push(i)
    }
    for (var k = 0; k < arr.length; k++) {
        sum += arr[k];
    }
    console.log(sum);
}

sigma(3);

/*2) Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5). */

function factorial(num) {
    var arr = [];
    var mul = 1;
    for (var i = 1; i <= num; i++) {
        arr.push(i)
    }
    for (var k = 0; k < arr.length; k++) {
        mul *= arr[k];
    }
    console.log(mul);
}

factorial(5);

/*3) Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). */

function fibonacci(x) {
    var fibx = 0;
    var fibase = [0, 1];
    for (var i = 1; i < x; i++) {
        fibase.push((fibase[i - 1] + fibase[i]))
        fibx = fibase[i + 1];
    }
    console.log(fibx);
    console.log(fibase);
}

fibonacci(12);

/*4) Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null. */

function penultimo(array) {
    if (array.length > 2) {
        console.log(array[array.length - 2]);
        return array[array.length - 2];
    } else {
        console.log(null)
        return null;
    }
}

penultimo([42, true, 4, "Liam", 7])

/*5) Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null.  */

function elementoN(array, x) {
    if (array.length > 2) {
        console.log(array[x]);
        return (array[x]);
    } else if (array.length <= 2) {
        console.log(null);
        return null
    }
}

elementoN([5, 2, 3, 6, 4, 9, 7], 3)

/*6) Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null. */

function segundoMasGrande(array) {
    var max = array[0];
    var max2 = array[1];
    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (max2 < array[i] && max2 < max) {
            max2 = array[i];
        }
    }
    console.log(max2);
}

segundoMasGrande([42, 1, 4, 3.14, 7])

/*7) Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false]. */

function doblePar(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i]);
        arr.push(array[i]);
    }
    console.log(arr);
}

doblePar([4, "Ulysses", 42, false])

/*8) Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto.  */

function recursionFibonacci(x) {
    var fibfinal = 0;
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    }
    fibfinal = (recursionFibonacci(x - 1) + recursionFibonacci(x - 2));
    return fibfinal;
}

console.log(recursionFibonacci(7));