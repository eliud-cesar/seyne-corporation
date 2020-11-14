
//Select all items for the 404 error document

var divs = document.getElementsByClassName("error-404");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i< divs.length; i++) {
        //Añades un evento a cada elemento
        divs[i].addEventListener("click",function() {
           //Aquí la función que se ejecutará cuando se dispare el evento
           window.location.href="./paginas-404/en-proceso.html" //Redireccion a Error 404
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
           window.location.href="./paginas-404/en-proceso.html" //Redireccion a Proceso
        });
    }


