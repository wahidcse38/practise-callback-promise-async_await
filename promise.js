new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The promis is Successful!");
    }, 2000)

    //reject("The Promise is Failed!")
})
    //console.log(p);
    .then((result) => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

console.log('Asyncronous')