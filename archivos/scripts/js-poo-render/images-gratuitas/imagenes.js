export default class Blog {
    constructor(miniatura,title, description, linkDescarga, creador, imageCreator) {
        this.miniatura = miniatura
        this.title = title
        this.description = description
        this.linkDescarga = linkDescarga
        this.creador = creador
        this.imageCreator = imageCreator
    }

    getMiniatura() {
        return this.miniatura
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getLinkdescription() {
        return this.linkDescarga
    }

    getCreador() {
        return this.creador
    }

    getImageCreator() {
        return this.imageCreator
    }

// SETERS

    setMiniatura(miniatura) {
        this.miniatura = miniatura
    }

    setTitle(title) {
        this.title = title
    }

    setDescription(description) {
        this.description = description
    }

    setLinkdescription(linkDescarga) {
        this.linkDescarga = linkDescarga
    }

    setCreador(creador) {
        this.creador = creador
    }

    setImageCreator(imageCreator) {
        this.imageCreator = imageCreator
    }
}