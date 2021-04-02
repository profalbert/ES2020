const person = {
  name: 'Max',
  age: 30,
}

console.log(Object.getOwnPropertyDescriptors(person))
console.log(Object.getOwnPropertyDescriptor(person, 'age'))

// entries (если передаем объект) - метод возвращает массив собственных
// перечисляемых свойств указанного объекта в формате [key, value] (все параметры в формате строки)
console.log(Object.entries(person))

console.log(
  // fromEntries - преобразует список пар ключ-значение в объект
  Object.fromEntries([
    ['name', 'Max'],
    ['age', 30],
  ]),
)
console.log(Object.fromEntries(Object.entries(person)))

// entries (если передаем массив) - метод возвращает массив собственных
// элементов в формате [index, value] (все параметры в формате строки)
console.log(Object.entries(['M', 'A', 'X']))

// новароченный метод (Object.entries() и .map() объединяет)
for (const [key, value] of Object.entries(person)) {
  console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)
}

console.log(Object.values(person))
console.log(Object.keys(person))
