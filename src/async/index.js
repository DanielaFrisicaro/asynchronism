const doSomethingAsync = ()=>{
    return new Promise ((resolve, reject)=>{
(true)//quiero hacer una validación de un valor true
? setTimeout(()=> resolve('Do something Async'), 3000)
:reject (new Error ('Test Error'))

    })
}
//ejecuto con la sintaxis de ASYNC-AWAIT
//se resuelve ahora, despues, o nunca.

const doSomething = async ()=>{
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')


//captar los errores
const anotherFunction = async()=>{
    try {
const something = await doSomethingAsync()
console.log(something)
    }catch(error){
        console.error(error)
    }
}

console.log('Before 1')
anotherFunction()
console.log('After 1')
