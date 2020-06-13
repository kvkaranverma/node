setTimeout(() => {
    console.log('2 seconds are up..')
}, 2000)

const names = ['Karan', 'Elena', 'Jen']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geoCode('Jagadhri', (data) => {
    console.log(data)
})


// Callback challenge
const add = (num_1, num_2, callback) => {
    setTimeout(() => {
        const result = num_1 + num_2
        callback(result)     
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})