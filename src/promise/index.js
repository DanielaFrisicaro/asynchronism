
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        //true arroja el mensaje positivo, false arroja el mensaje negativo
        if (true) {
            resolve('Good!')
        }
        else {
            reject('Wrong!')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true');
            }, 2000)
        }

        else {
            const error = new Error('Algo no funciona');
            reject(error)
        }
    })
}
somethingWillHappen2()
.then(response => console.log(response))
.then(()=>console.log('prueba'))
.catch(err => console.error(err))

//EJECUTAR MUCHAS PROMESAS JUNTAS: PROMIS ALL.
//PERMITE EJECUTAR LAS PROMESAS Y RETORNAR UN ARRAY CON LOS RESULTADOS

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
    console.log('Array of results', response)
})
.catch(err=>{
    console.error(err)
})

//LOS ARGUMENTOS DE UNA PROMESA SON : RESOLVE Y REJECT