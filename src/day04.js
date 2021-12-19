/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo,
100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los
espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el
árbol.
*/

export default function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    return returnXmasString(height);
}

function returnXmasString(n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        string = string.concat(generateLine(i, n));
    }
    string = string.concat(generateLine(0, n, '#'));
    string = string.concat(generateLine(0, n, '#', ''));
    return string;
}

function generateLine(line, n, symbol = '*', linebreak = '\n') {
    const asteriskLine = line * 2 + 1;
    const underLine = (n - 1) - line;
    return '_'.repeat(underLine) + symbol.repeat(asteriskLine) + '_'.repeat(underLine) + linebreak;
}