// <li class="plus">
// Cash
// <span>-$400</span>
// <button class="delete-btn">x</button>
// </li>

let inputText = document.querySelector('#text')
let inputValue = document.querySelector('#amount')
let ul = document.querySelector('#list')
let li = document.querySelector('.plus')
let total = document.querySelector('#balance')
let income = document.querySelector('#money-plus')
let expense = document.querySelector('#money-minus')

let array = []
let incomeBalance = 0
let expenceBalance = 0
let totalBalance = 0
let minus = 0

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const li = document.createElement('li')
  li.className = 'plus'
  li.innerHTML = inputText.value
  ul.appendChild(li)

  const span = document.createElement('span')
  span.innerHTML = inputValue.value
  li.appendChild(span)
  const button = document.createElement('button')
  button.className = 'delete-btn'

  button.innerHTML = 'x'
  li.appendChild(button)

  array.push({
    key: inputText.value,
    value: inputValue.value,
  })

  balance(array)
  income.innerHTML = `$ ${incomeBalance}`
  expense.innerHTML = `$ ${expenceBalance}`
  total.innerHTML = `$ ${totalBalance}`

  let deleteBtn = document.querySelectorAll('.delete-btn')
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      incomeBalance = 0
      expenceBalance = 0
      totalBalance = 0
      for (var i = 0; i < array.length; i++) {
        if (array[i].key == btn.previousSibling.previousSibling.textContent) {
          btn.parentElement.remove()
          array.splice(i, 1)
        }

        if (array.length > 0 && parseInt(array[i].value) >= 0) {
          incomeBalance += parseInt(array[i].value)
          income.innerHTML = `$ ${incomeBalance}`
          totalBalance += parseInt(array[i].value)
          total.innerHTML = `$ ${totalBalance}`
        } else if (array.length > 0 && parseInt(array[i].value) <= 0) {
          expenceBalance += parseInt(array[i].value)
          expense.innerHTML = `$  ${expenceBalance}`
          totalBalance += parseInt(array[i].value)
          total.innerHTML = `$ ${totalBalance}`
        } else if (array.length == 0) {
          incomeBalance = 0
          expenceBalance = 0
          expense.innerHTML = `$ ${expenceBalance}`
          income.innerHTML = `$ ${incomeBalance}`
          totalBalance = 0
          total.innerHTML = `$ ${totalBalance}`
        }

        incomeBalance = 0
        expenceBalance = 0
      }
    })
  })

  event.target.reset()
})

//functions

let balance = function (array) {
  let a = 0
  for (const el of array) {
    a = parseInt(el.value)
  }
  if (a > 0) {
    incomeBalance += a
    totalBalance += a
  } else {
    expenceBalance += a
    totalBalance += a
  }
}
