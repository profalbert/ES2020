// Оператор нулевого слияния - nullable (??) это логический оператор,
// который возвращает значение правого операнда,
// когда значение левого операнда равно null или undefined,
// в противном случае будет возвращено значение левого операнда.

const values = {
  undefined: undefined,
  null: null,
  false: false,
  zero: 0,
  bigintZero: 0n,
  empty: '',
  nan: NaN,
}

console.log(values.undefined || 'default undefined')
console.log(values.undefined ?? 'default undefined')

console.log(values.null || 'default null')
console.log(values.null ?? 'default null')

console.log(values.false || 'default false')
console.log(values.false ?? 'default false')

console.log(values.zero || 'default zero')
console.log(values.zero ?? 'default zero')

console.log(values.bigintZero || 'default bigintZero')
console.log(values.bigintZero ?? 'default bigintZero')

console.log(values.empty || 'default empty')
console.log(values.empty ?? 'default empty')

console.log(values.nan || 'default NaN')
console.log(values.nan ?? 'default NaN')
