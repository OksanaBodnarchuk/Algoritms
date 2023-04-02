// Задача: вызов лифта
// В доме два лифта.
// Реализовать алгоритм отправки наиближайшего на вызывающий этаж.
// Алгоритм будет применяться в домах разной этажности.
// *Алгоритм будет применяться в домах с количеством > 2 лифтов
// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// на вход: 1
// отправляем лифт А

function find(elevatorA, elevatorB, current) {

    const diff1 = Math.abs(elevatorA - current)
    const diff2 = Math.abs(elevatorB - current)


    if (diff1 < diff2) {
        return `elevator A = ${diff1} `
    }else{
        return `elevator B = ${diff2}`
    }

}

console.log(find(0, 8, 1));