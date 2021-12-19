/*
¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para
esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver
como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa
que sólo pasaremos arrays de, como mínimo, tres posiciones.

Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto
más alto y entonces ver que la bajada es estricta hacia abajo...
*/


export default function checkSledJump(heights) {
    let returning = true;
    const maxValueIndex = heights.indexOf(Math.max(...heights));

    const downValue = heights.slice(maxValueIndex + 1);
    const upValue = heights.slice(0, maxValueIndex);

    // Si solo sube
    if (downValue.length < 1) returning = false;

    // Me fijo que suba estrictamente
    let previosValue = - 1;
    upValue.forEach(element => {
        if (element <= previosValue) returning = false;
        previosValue = element;
    });

    // Me fijo que baje estrictamente
    previosValue = heights[maxValueIndex];
    downValue.forEach(element => {
        if (element >= previosValue) returning = false;
        previosValue = element;
    });

    return returning;
}