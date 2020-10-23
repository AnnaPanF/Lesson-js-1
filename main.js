// Задание 1

let number = 0
while (number <= 100) {
    if (IsSimpleNumber (number) ) {
        console.log (number)
    }
    number += 1
}

function IsSimpleNumber (n) {
    if (n === 0) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
   return true 
}

IsSimpleNumber(100)

// Задание 2
let arr = [34, 76, 18]

function countBasketPrice (prices) {
    let sum = 0
    for (const price of prices) {
        sum = sum + price
    } 
    return sum
}
console.log (countBasketPrice(arr))

// Задание 3 
 for (let i = 0; i <= 9; i = i + (console.log (i)|| 1)) {
 }


// Задание 4 
for(let i = 0; i < 20; i++) {
    console.log (sharp(i))
}

function sharp (countOfSharps) {
    let sum = ""
    for (let i = 0; i < countOfSharps; i++) {
        sum = sum + "#"
    }
    return sum
}


// УРОК 4

// Задание 1

function convertNumberToObject(num) {
    if (num > 999) {
        console.log('Число больше 999')
        return {}

    }
    let x = num % 10 // x = 5 num = 245
    num = Math.floor(num / 10) // x = 5 num 24
    let y = num % 10 // y = 4 num = 24
    num = Math.floor(num / 10) // num = 2
    let z = num // z = 2 num = 2 
    return {
        'единицы': x,
        'десятки': y,
        'сотни': z
    }
}

console.log(convertNumberToObject(245))

// Задание 2
class Cart {
    constructor(product) {
        this.products = product
    }

    calculatePrice(){
        return countBasketPrice(this.products.map(function(product) {
            return product.price
        })) 
           
    }

    addNewProduct(product) {
        this.products.push(product)
    }

    render(element) {
        for(const product of this.products){
            const productElement = document.createElement('div')
            const nameElement = document.createElement('span')
            nameElement.innerText = 'Название: ' + product.name
            productElement.appendChild(nameElement)
            const priceElement = document.createElement('span')
            priceElement.innerText = 'Стоимость: ' + product.price
            productElement.appendChild(priceElement)
            element.appendChild(productElement)
        }
        const totalPriceElement = document.createElement('div')
        totalPriceElement.innerText = this.calculatePrice()
        element.appendChild(totalPriceElement)
    }


}

class Product {
    constructor(name,price) {
    this.name = name
    this.price = price
    }
}


let phone = new Product ("телефон", 1000)
let player = new Product ("плеер", 1500)
let headphones = new Product ("наушники", 500)
let my_cart = new Cart ([phone,player,headphones])                                           

console.log(my_cart.calculatePrice())




// Урок 5


// Задание 1
function myBoard() {
    const board = document.querySelector('#board')
    let flag = true
    let arrLetter = ['','a','b','c','d','e','f','g','h']
    let arrNumber = [1,2,3,4,5,6,7,8]

    const row = document.createElement('div')
    row.className = 'row'
    board.appendChild(row)
    for(let j = 0; j < 9; j++) {
        const cell = document.createElement('div')
        row.appendChild(cell)
        cell.className = 'header'
        cell.innerText = arrLetter[j]
    }

    for(let i = 0; i < 8; i++) {
        const row = document.createElement('div')
        row.className = 'row'
        board.appendChild(row)
        const cell = document.createElement('div')
        cell.className = 'header'
        row.appendChild(cell)
        cell.innerText = arrNumber[i]
        for(let j = 0; j < 8; j++) {
            const cell = document.createElement('div')
            row.appendChild(cell)
            if (flag) {
                cell.className = 'cell black'
                flag = false
            }  else {
                cell.className = 'cell white'
                flag = true
            }
        } 
        flag = !flag
    }    
}
myBoard()


//Задание 2

my_cart.render(document.querySelector('.card'))
