//..................................CALLBACKS...................................................................//

function sum(num1, num2){
    return num1 + num2
}

//hago otra función que recibe como argumento la función creada anteriormente

function calc (num1, num2, callback){
    return callback(num1, num2)
}

//creo el llamado.

console.log(calc(2,2,sum))
console.log(calc(8,2,sum))

function date(callback){
    console.log(new Date);
    setTimeout(function(){
let date= new Date;
callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)