//Select all items for the 404 error document

var divs = document.getElementsByClassName("error-404");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i < divs.length; i++) {
        //Añades un evento a cada elemento
        divs[i].addEventListener("click",function() {
           //Aquí la función que se ejecutará cuando se dispare el evento
           window.location.href="./archivos/html's/paginas-404/errror-404.html" //Redireccion a Error 404
        });
    }



// ---------------------------------------------------------



//Select all items for in-process document

var divs = document.getElementsByClassName("en-proceso");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i< divs.length; i++) {
        //Añades un evento a cada elemento
        divs[i].addEventListener("click",function() {
           //Aquí la función que se ejecutará cuando se dispare el evento
           window.location.href="./archivos/html's/paginas-404/en-proceso.html" //Redireccion a Proceso
        });
    }

















// const error404 = () => {
//     location.href = "../../archivos/html's/paginas-404/errror-404.html"
// }
// onclick="javascript:error404();"

// const enProceso = () => {
//     location.href = "../../archivos/html's/paginas-404/en-proceso.html"
// }
// onclick="javascript:enProceso();"



// const erroor = document.getElementById('error404')

// erroor.addEventListener('click', () => {
//     window.location.href="./archivos/html's/paginas-404/errror-404.html"
// })

// let enProceso = document.querySelectorAll("enProceso")

// let valor = enProceso.addEventListener('click')

// const enfuncion = (valor) => {
//     if(valor === true) {
//         window.location.href="./archivos/html's/paginas-404/en-proceso.html"
//     }
// }

// enfuncion()

// enProceso.addEventListener('click', () => {
//     window.location.href="./archivos/html's/paginas-404/en-proceso.html"
// })


// const funcionProceso = enProceso => {
//     enProceso.addEventListener('click', () => {
//     window.location.href="./archivos/html's/paginas-404/en-proceso.html"
// })
// }

// funcionProceso()


// enProceso.addEventListener('click', () => {
//     window.location.href="./archivos/html's/paginas-404/en-proceso.html"
// })


// const erroor = document.getElementsByClassName('errorr')

// erroor.window.addEventListener('click', () => {
//     window.location.href="./archivos/html's/paginas-404/errror-404.html"
// })