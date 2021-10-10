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
    renderInfoList() {
        retrun `
        <li>
        <a href="#" data-id="${this.id}">${this.title}</a>
        </li>
        `
    }

    renderInfo() {
        return `
        <div class="info_data">
        <h1>${this.source}</h1>
        <p ${this.title}</p>
        <p ${this.date}</p>
        <p ${this.caption}</p>
        <p ${this.text_credit}</p>
        <p ${this.image_credit}</p>
        </div>
        `
    }


}