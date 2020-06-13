// Object shorthand property

const name = 'Karan'
const userAge = 23

const user = {
    name,
    age: userAge,
    location: 'Yamuna Nagar'
}

console.log(user)

// Object destructuring

const product = {
    label : 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

const {label: productLabel, stock, rating = 5} = product
console.log(productLabel, stock, rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)