const p1 = Promise.resolve(1)
const p2 = Promise.reject('my error')
const p3 = Promise.resolve(3)

// ;(async () => {
// 	const result = await Promise.all([p1, p2, p3]).catch(err => console.log(err))
// 	console.log(result)
// })()

// Promise.all зареджектиться, как только один из промисов
// в массиве будет отклонен. Promise.allSettled возвращает промис,
// который исполняется когда все полученные
// промисы завершены (исполнены или отклонены),
// содержащий массив результатов исполнения полученных промисов.

// пример 1
Promise.allSettled([p1, p2, p3]).then((result) => {
  console.log(result)
})

// пример 2
// аналогичная операция, но с использованием
// анонимной функции и acync/await
;(async () => {
  const result = await Promise.allSettled([p1, p2, p3])
  console.log(result)
})()
