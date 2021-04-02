;(async () => {
  const module = await import('./module.js') // динамический импорт
  console.log(module)
  console.log(module.SECRET_KEY) // принимаем экспортируемую константу из module.js

  const Person = module.default // принимает конкретно
  // экспортируемый модуль по умолчанию из всего общего файла (где мб не только один экспорт)

  const person = new Person('Max')
  console.log(person)
})()
