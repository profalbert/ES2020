const emulate = (id, ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(id), ms)
  })

const promises = [emulate(1, 250), emulate(2, 500), emulate(3, 1500)]

// старый способ
async function old() {
  // результаты промисов выводятся сразу, когда завершаться все промисы
  for (const promise of await Promise.all(promises)) {
    console.log('Old:', promise)
  }
}

// новый способ
async function modern() {
  // результаты промисов выводятся постепенно, по мере своего завершения
  for await (const promise of promises) {
    console.log('Modern:', promise)
  }
}

modern()
// old()
