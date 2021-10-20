class Comment {
    constructor({title, description, id}) {
        this.title = title
        this.description = description
        this.id = id
    }
    
    renderComments() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.title}</a> 
        </li>
        <br>
        `
    }
    renderComment() {
        return `
        <h2>Title:</h2>
        <h1>${this.title}</h1>
        <h2>Description:</h1>
        <h1>${this.description}</h1>
        <button id="delete" data-id="${this.id}" data-info-id"${this.info_id}>Delete</button>
        `
    }
}
