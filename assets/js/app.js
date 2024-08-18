//1. create a new array containing only the words with more than 5 characters.
const words = ['apple', 'banana', 'cherry', 'date'];
const newWords = words.filter(word => {
    if (word.length > 5) {
        return word
    }
})

console.log('1 ===>', newWords)

// 2. create a new array containing only the numbers that are divisible by both 5 and 10. 
const numbers = [10, 25, 30, 45, 50];

const numDiv = numbers.filter(num => {
       return num % 5 === 0 && num % 10 === 0
})

console.log('2 ===>', numDiv)

// 3 create a new array containing only the objects where active is true.
const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true }
];

const trueUsers = users.filter(user => { return user.active })
console.log("3 ===>", trueUsers)


// 4. convert each temperature to Fahrenheits array.
// Celsius to Fahrenheit, multiply by 2 then add 30.

const temperaturesCelsius = [0, 10, 20, 30]

const fahrenheitTemp = temperaturesCelsius.map(temp => { return temp * 2 + 30 })

console.log("4====>", fahrenheitTemp)

// 5 create an array of objects where each object has a name property. [{name : 'Alice'}]
const names = ['Alice', 'Bob', 'Charlie']

const arrObj = names.map(id => {
    return ({
        name: id
    })
})

console.log("5====>", arrObj)

// 6 create a array of even numbers squares array 
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenSqrArr = numbersArr.filter(num => {
    if (num % 2 === 0) {
        return num
    }
}).map(n => { return n * n })

console.log("6 ===>", evenSqrArr)

// 7 create a new array where each inner array is doubled, resulting in [[2, 4], [6, 8], [10, 12]]
const matrix = [[1, 2], [3, 4], [5, 6]]

const doubledMatr = matrix.map(arr => {
    return arr.map(ele => {
        return ele * 2
    })
})

console.log("7===>", doubledMatr)

// 8 create a new array containing only the products that are in stock and cost more than $700.
const products = [{ name: 'Laptop', price: 1000, inStock: true }, 
    { name: 'Phone', price: 500, inStock: false },
    { name: 'Tablet', price: 750, inStock: true }
];

const stockProd = products.filter(prod => {
    return prod.inStock && prod.price > 700
})

console.log('8===>', stockProd)


// 9 create a new array of objects with just the name and city, and then  return only users who live in a city with a zip code starting with '9'.
// [{name : "Alice", city :"New York"}]
const usersArr = [
  { name: 'Alice', age: 25, address: { city: 'New York', zip: 10001 } },
  { name: 'Bob', age: 30, address: { city: 'San Francisco', zip: 94105 } },
  { name: 'Charlie', age: 35, address: { city: 'Los Angeles', zip: 90001 } }
];

const userCityArr = usersArr.map(user => {
    return {
        name : user.name,
        city : user.address.city
    }
})

console.log("9====>",userCityArr)


// 10 arr of comp whos starts in 80s
// [{compName : "Compny One", duration : '1981 - 2003'}]

// array of comp catg is retail
// [{compNmae : 'Company One', duration : 22}]

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "    Retail    ", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "    All   ReTail         ", start: 1981, end: 1989 }
];

const compStart = companies.filter(comp => {
    return comp.start > 1980 && comp.start < 1990
}).map(com => {
    return {
        compName : com.name,
        duration : `${com.start} - ${com.end}`
    }
})

console.log("10-1 ===>", compStart)

// const categoryRetail = companies.filter(comp => {
//     return comp.category.toLowerCase().trim() === "retail"
// }).map(com => {
//     return {
//         compName : com.name,
//         duration : com.end - com.start
//     }
// })

const categoryRetail = companies.filter(comp => {
    return comp.category.trim().toLocaleLowerCase().includes('retail')
}).map(com => {
    return {
        compName : com.name,
        duration : com.end - com.start
    }
})

console.log("10-2 ===>", categoryRetail)
