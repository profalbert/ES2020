// Опциональная цепочка - optional (?.) это безопасный способ доступа
// к свойствам вложенных объектов,
// даже если какое-либо из промежуточных свойств не существует.

// Нюансы:
// 1) Не злоупотребляйте опциональной цепочкой
//    Используйте ?. только тогда, когда допускаете ситуацию,
//    что значение перед ним не существует.
// 2) Переменная перед ?. должна быть объявлена

const bill1 = {
  bank: {
    name: 'My Bank',
    amount: {
      value: 1000,
      currency: 'RUB',
    },
  },
}

const bill2 = {}

function getBillValueFrom(bill) {
  // return bill.bank.amount.value

  // return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
  // 	? bill.bank.amount.value
  // 	: undefined

  // если не найдет свойство value (самое последнее свойство в цепочке), то выведет undefined
  return bill?.bank?.amount?.value
}

console.log(getBillValueFrom(bill1))
console.log(getBillValueFrom(bill2))
