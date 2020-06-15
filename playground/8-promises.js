const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1, 4, 7])
        reject('Things went wrong')
        // reject('something') // this will not work(first reject will work)
        // resolve('something') // this will not work(as reject has worked)
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})