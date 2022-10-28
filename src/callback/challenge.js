//hay que instanciarla
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/'
//Se utiliza XMLHTTPREQUEST en vez de FETCH, esta ultima ya usa promesas, y aún no se están considerando en este proyecto.

//AJAX
/*
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
       }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}


*/

//Función que va a encargarse de hacer las periciones a la Api.
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true)//3er valor activar el asincronismo
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) { callback(null, JSON.parse(xhttp.responseText)) }
            else {
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }

    }
    xhttp.send()
}

//hago llamado a la Api con CALLBACKS

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})

//callback hell, mala practica ya que estan todas las peticiones encadenadas. Lo ideal es hacer 3 llamadas.