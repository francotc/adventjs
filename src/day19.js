/*
Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es
un regalo 🎁 para siempre.

En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo
disponible para completar dos cursos.

Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el
segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos
que vamos a poder completar con el tiempo disponible proporcionado. Si no nos da tiempo, devolvemos null

Vamos a ver unos ejemplos:

learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0
y 2.

learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre
devolvemos el primero que encontremos

learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos
learn(5, [5, 5, 5]) // null -> no nos da tiempo a hacer dos cursos
*/


export default function learn(time, courses) {
    let resultado = null;
    let total = 0;
    for (let index = 0; index < courses.length; index++) {
        const course = courses[index];

        for (let index2 = 0; index2 < courses.length; index2++) {
            const course2 = courses[index2];
            const suma = course + course2;
            if (suma <= time && suma > total && index !== index2) {
                resultado = [index, index2];
                total = suma;
            }
        }
    };
    return resultado;
}