const enProceso = document.getElementById('proceso')
const mostrarArchivoEnProceso = document.getElementById('main-en-proceso')

// function prueba1 () {
//     if(enProceso === "#") {
//         mostraArchivoEnProceso.add('active')
//     }
// }
const enProceso = () => {
    
    if (enProceso && mostrarArchivoEnProceso) {
        enProceso.addEventListener('click', () => {
            mostrarArchivoEnProceso.classList.add('active')
        })
}
}


enProceso()