const start = '       Hello Youtube '
const end = 'This is new JavaScript features          '

// удаляет пробельные символы с
// начала - trimStart и конца - trimEnd строки
console.log(start.trimStart() + end.trimEnd())

// удаляет пробельные символы с (начала и конца) - trim строки
console.log((start + end).trim())

// Метод padStart() или padEnd() заполняет текущую строку
// другой строкой (второй параметр метода)
// несколько раз, если нужно (первый параметр метода) так,
// что итоговая строка достигает заданной длины.
// Заполнение осуществляется в начале
// (слева) - padStart() или в конце (справа) - padEnd() текущей строки.
console.log('vk'.padStart(6, 'www.'))
console.log('vk'.padEnd(6, '.com'))

// ===========

function tag(strings, name, age) {
  const [s1, s2, s3] = strings
  const ageStr = age > 42 ? 'старшим' : 'младшим'
  return `${s1}${name}${s2}${ageStr}${s3}`
}

const person = {
  name: 'Максим',
  age: 50,
}

const output = tag`Человек по имени ${person.name} является ${person.age} в семье!`

console.log(output)
