// Задание 1

let number = 0
while (number <= 100) {
    if (IsSimpleNumber (number) ) {
        console.log (number)
    }
    number += 1
}

function IsSimpleNumber (n) {
    if (n == 0) {
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