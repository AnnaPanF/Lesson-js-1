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
    constructor(products, element) {
        this.cartProducts = products.map(function(product) {
            return new CartProduct(product)
        })
        this.element = element
    }

    calculatePrice(){
        return countBasketPrice(this.cartProducts.map(function(cartProduct) {
            return cartProduct.product.price
        })) 
           
    }

    addNewProduct(product) {
        let existsCartProduct = this.cartProducts.find(function(cartProduct) {
            return cartProduct.product.name === product.name
        })
        if (existsCartProduct === undefined) {
            this.cartProducts.push(new CartProduct(product))
        } else {
            existsCartProduct.counter = existsCartProduct.counter + 1
        }
        
    }

    render() {
        this.element.innerHTML = '<span class="title d-flex justify-content-center align-items-center">Корзина</span>' 

        this.cartProducts = this.cartProducts.filter(function(cartProduct) {
            return cartProduct.counter > 0
        })
        
        for(const cartProduct of this.cartProducts){
            const productElement = document.createElement('div')
            productElement.className = 'cart-main'
            productElement.innerHTML = `
                <figure class="row">
                <div class="col-4">
                <img class="product-img" src="${cartProduct.product.picture}" alt=""/>
                </div>
                <figcaption class="col-8 my-auto">
                <span class="product">${cartProduct.product.name}</span>
                <span class="price">Стоимость: ${cartProduct.product.price}</span>
                <div class="counter">
                <input class="text" type="text" value="${cartProduct.counter}">
                <button class="count">-</button>
                </div>
                </figcaption>
                </figure>
            `

            const button = productElement.querySelector("button")
            button.onclick = () => {
                cartProduct.counter = cartProduct.counter - 1
                this.render()
            }

            this.element.appendChild(productElement)
        }
        const totalPriceElement = document.createElement('div')
        totalPriceElement.innerText = 'Итоговая стоимость: ' + this.calculatePrice()
        totalPriceElement.className = 'total'
        this.element.appendChild(totalPriceElement)
    }


}

class CartProduct {
    constructor(product) {
        this.product = product
        this.counter = 1
    }
}

class List {
    constructor(products, cart, element) {
        this.products = products
        this.cart = cart
        this.element = element
    }

    render(){
        this.element.innerHTML = ''
        for(const product of this.products){
            const listElement = document.createElement('div')
            listElement.className = 'list-product'
            listElement.innerHTML = `
                <figure class="row">
                    <div class="col-4 d-flex justify-content-center">
                        <img class="main-img" src="${product.picture}" alt=""/>
                    </div>
                    <figcaption class="col-8 my-auto">
                        <span class="product list-prod">${product.name}</span>
                        <span class="price list-price"> ${product.description}</span>
                        <button class="button">Купить</button>
                    </figcaption>
                </figure>
            `
            const button = listElement.querySelector("button")
            button.onclick = () => {
                this.cart.addNewProduct(product)
                this.cart.render()
            }
            this.element.appendChild(listElement)
        }
    }

}

class Product {
    constructor(name,price,picture,description) {
    this.name = name
    this.price = price
    this.picture = picture
    this.description = description
    }
}


let cherry = new Product ("Капкейк с вишней", 150, 'img/cherry.jpg', 'Нежные, сливочные ванильные капкейки с яркой вишнёвой начинкой и красивой шапочкой из воздушного ягодного крема.')
let raspberry = new Product ("Капкейк с малиной", 150, 'img/raspberry.jpg', 'Шоколадные капкейки с нежной малиновой начинкой и красивой шапочкой из взбитого творожного крема.')
let blackberry = new Product ("Капкейк с ежевикой", 200, 'img/blackberry.jpg', 'Воздушные творожные капкейки с необычной ежевичной начинкой и красивой шапочкой из сливочного крема.')
let my_cart = new Cart ([], document.querySelector('.card'))  
let my_list = new List ([cherry,raspberry,blackberry], my_cart, document.querySelector('.products') ) 

my_cart.render()

my_list.render()

console.log(my_cart.calculatePrice())




// Урок 5


// Задание 1
//function myBoard() {
    //const board = document.querySelector('#board')
    //let flag = true
    //let arrLetter = ['','a','b','c','d','e','f','g','h']
    //let arrNumber = [1,2,3,4,5,6,7,8]

    //const row = document.createElement('div')
    //row.className = 'row'
    //board.appendChild(row)
    //for(let j = 0; j < 9; j++) {
        //const cell = document.createElement('div')
        //row.appendChild(cell)
        //cell.className = 'header'
        //cell.innerText = arrLetter[j]
    //}

    //for(let i = 0; i < 8; i++) {
        //const row = document.createElement('div')
        //row.className = 'row'
        //board.appendChild(row)
        //const cell = document.createElement('div')
        //cell.className = 'header'
        //row.appendChild(cell)
        //cell.innerText = arrNumber[i]
        //for(let j = 0; j < 8; j++) {
            //const cell = document.createElement('div')
            //row.appendChild(cell)
            //if (flag) {
                //cell.className = 'cell black'
                //flag = false
            //}  else {
                //cell.className = 'cell white'
                //flag = true
            //}
        //} 
        //flag = !flag
    //}    
//}
//myBoard()


//Задание 2


