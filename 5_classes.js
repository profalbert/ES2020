// todo: изучить этот файл по подробнее

class Person {
  static type = 'HUMAN'
  static #area = 'EARTH'
  name = 'unknown name'
  #year = 1993 // # - приватное поле

  constructor(name) {
    this.name = name
  }

  static printArea() {
    return Person.#area === 'EARTH' ? 'Земля' : 'Марс'
  }

  get age() {
    // Date.prototype.getFullYear() - возвращает год указанной даты по местному времени (пример: 2021)
    return new Date().getFullYear() - this.#year
  }

  set age(age) {
    if (age > 0) {
      this.#year = new Date().getFullYear() - age
    }
  }
}

const person = new Person('Maxim')
console.log(person.name)
console.log(person.age)
person.age = 26
console.log(person.age)
console.log(Person.type)
console.log(Person.printArea())
