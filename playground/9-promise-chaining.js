const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(3, 5).then(result => {
//     console.log(result)

//     add(result, 5).then(newResult => {
//         console.log(newResult)
//     }).catch(error => {
//         console.log(error)
//     })
// }).catch(error => {
//     console.log('error ', error)
// })

//Promise chaining

add(1, 1).then(sum => {
    console.log(sum)
    return add(sum, 4)
}).then(sum2 => {
    console.log(sum2)
}).catch(error => {
    console.log('error ', error)
})