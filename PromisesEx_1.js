//Promise is an object tht may produce a single value some time in the future either a resolved value, or a reson that its not resolved(rejected)..
//it has one of the three possible states, it can be fullfilled(resolved), rejected, pending 
//promise is good for asynchronous programming, when the promise gets resolve o rejected then show the responce  
//create promise

const promise  = new Promise((resolve, reject) => {
    if(true){
     resolve('Stuff Worked');
    }
    else{
    reject('Error, it broke')
    }
    
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for')
})

Promise.all([promise, promise2, promise3, promise4])
.then(values =>{
    console.log(values)
})



promise.then(result => console.log(result));
// Stuff Worked
promise
.then(result => result + '!')
.then(retult2 => console.log(retult2))
// Stuff Worked!

promise
.then(result => result + '!')
.then(result2 => {
    throw Error  
    console.log(retult2)
})
 .catch(() => console.log('error!'))   //error! so that mean .catch theow error when any error occure in .then chain
 
 promise
.then(result => result + '!')
.then(result2 =>result2 + '?')
.catch(() => console.log('error!')) 
.then(result3 => console.log(result3 + '!')) // Stuff Worked!?!

promise
.then(result => result + '!')
.then(result2 =>result2 + '?')
.catch(() => console.log('error!')) 
.then(result3 => {
    throw Error
    console.log(result3 + '!')  // Uncaught (in promise) ƒ Error() { [native code] }
})



