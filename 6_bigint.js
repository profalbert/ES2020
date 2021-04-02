// Константа Number.MAX_SAFE_INTEGER
// представляет максимальное безопасное
// целочисленное значение в JavaScript (253 - 1) = 9007199254740991

console.log(Number.MAX_SAFE_INTEGER)
// console.log(900719925474099123435345) - некорректный пример

console.log(typeof 10) // тип number
console.log(typeof 10n) // тип bigint
console.log(90071992547409912121n - 1231231231n) // bigint работает только с bigint!!!
console.log(-90071992547409912121n) // bigint может быть отрицательным значением

// console.log(10n - 4) // будет ошибка!!!
console.log(parseInt(10n) - 4) // приводит bigint к number. Результат: 6
console.log(10n - BigInt(4)) // // приводит number к bigint. Результат: 6n

console.log(5n / 2n) // Результат: 2n , так как bigint просто откидывает дробную часть
// console.log(5.42n) // будет ошибка!!! Ведь bigint - это целые числа!!!
