/*
Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos
y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los
manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha
visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays)
donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
[' ', ' ', ' '],
[' ', ' ', 'm'],
[' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
['*', ' ', ' ', ' '],
[' ', 'm', '*', ' '],
[' ', ' ', ' ', ' '],
[' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!
*/

export default function canMouseEat(direction, game) {
    let idx1, idx2;

    game.forEach((game2, index1) => {
        game2.forEach((value, index2) => {
            if (value === 'm') { idx1 = index1; idx2 = index2; }
        });
    });

    /*  switch (direction) {
        case 'up': vertical = -1; break;
        case 'down': vertical = 1; break;
        case 'left': horizontal = -1; break;
        case 'right': horizontal = 1; break;
    } */
    const movement =
        direction === 'up'    ? [0,-1] :
        direction === 'down'  ? [0,1]  :
        direction === 'left'  ? [-1,0] :
        direction === 'right' ? [1,0]  :
                                [0,0];

    return game[idx1 + movement[1]]?.[idx2 + movement[0]] === '*';
}
