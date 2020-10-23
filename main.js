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