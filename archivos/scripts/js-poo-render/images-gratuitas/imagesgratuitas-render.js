import Imagenes from "./imagenes.js"



const blog1 = new Imagenes("https://edteam-media.s3.amazonaws.com/courses/small/8f37ebcc-16a1-4001-93e1-5f21893cd3cc.jpg", "AK-47", "Creditos a armapedio por se un buen yotuber especializado en armeria", "../../../../images/images-gratis/ak47/ak47.zip", "Juanito alcachofa", "https://edteam-media.s3.amazonaws.com/courses/small/8f37ebcc-16a1-4001-93e1-5f21893cd3cc.jpg")
const blog2 = new Imagenes("https://edteam-media.s3.amazonaws.com/courses/small/1c0642f7-dd73-4f4c-9ce8-b8977aa18be1.jpg", "AK-47", "Creditos a armapedio por se un buen yotuber especializado en armeria", "../../../../images/images-gratis/ak47/ak47.zip", "Juanito alcachofa", "https://edteam-media.s3.amazonaws.com/courses/small/1c0642f7-dd73-4f4c-9ce8-b8977aa18be1.jpg")



const elem = document.getElementById("blogs")


function mostrarBlog(curso) {
    const hijo = document.createElement("div")
    // hijo.classList.add("blog-de-seyne")
    hijo.innerHTML = `
    <article class="s-shadow-bottom">
    <!-- Póster y contenido -->
    <div class="ed-grid m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
    <!-- Contenedor de la imagen -->
    <div class="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
        <img src="${curso.getMiniatura()} alt="${curso.getTitle()}">
        </div>
    <!-- Contenido -->
    <div class="s-pxy-2 m-pxy-0 m-cols-3">
    <h3>${curso.getTitle()}</h3>
    <p class="s-mb-0">${curso.getDescription()}</p>
    </div>
    </div>
    <footer class="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
    <!-- Define el ancho máximo de la imagen -->
    <div class="s-10 m-5 s-mr-1">
    <!--  imagen pequeña del creador -->
    <div class="circle ">
    <img  src="${curso.getImageCreator()}">
    </div>
    </div>
    <!-- Create -->
    <p class="s-mb-0">${curso.getCreador()}</p>
    <!-- Botón -->
    <a class="button s-to-right" href="${curso.getLinkdescription()}">Descargar</a>
    </footer>
    </article>
    `
    
    elem.appendChild(hijo)
}

mostrarBlog(blog1)
mostrarBlog(blog2)



// const imagenesgratis = [
    // {

// }
// ]



