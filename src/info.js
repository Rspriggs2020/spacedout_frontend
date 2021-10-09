class Info {
    constructor({source, image, title, date, caption, text_credit, image_credit, id}) {
        this.source = source
        this.image = image
        this.image = title
        this.date = date
        this.caption = caption
        this.text_credit = text_credit
        this.image_credit = image_credit
    
        this.id = id
    }
    addToSelection(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.title
        selection.appendChild(option)
    }

    renderInfo() {
        this.element.innerHTML = `
        <div info-id="${this.id}">
        <h1 class="source">${this.source}</h1>
        <p class="info-title">${this.title}</p>
        <p class="date">${this.date}</p>
        <p class="caption">${this.caption}</p>
        <p class="text-credit">${this.text_credit}</p>
        <p class="image-credit">${this.image_credit}</p>
        </div>
        `
        return this.element
    }
}