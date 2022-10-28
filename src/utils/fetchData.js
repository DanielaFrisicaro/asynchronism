//hay que instanciarla
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {


        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true)//3er valor activar el asincronismo
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))


            }

        })
        xhttp.send()

    })

}

module.exports = fetchData

//se usa el module.exports porque se usa Node usa common Js y no usa el import ni export default