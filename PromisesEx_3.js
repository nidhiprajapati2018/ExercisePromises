// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
    setTimeout(resolve('Success'), 4000)
})

//#2) Run the above promise and make it console.log "success"
promise.then(response => console.log(response))
//or
promise.then(console.log) 

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
const promise2 = Promise.resolve(
    setTimeout(() => {
        console.log('success with 5')
    }, 3000)
)



// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

