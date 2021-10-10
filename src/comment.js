class Comment {
    static all = [];
    static cont = document.getElementById("comments-catch");
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.info_id = data.info_id
    }
    renderComments() {
        return `
        <li>
        <a data-id="${this.id}">${this.title}</a>
        </li>
        `
    }
    renderComment() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h1 class="title">${this.title}</h1>
        <p class="description">${this.description}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit</button>
        <button class="delete" data-id=${this.id}>Delete</button>
        `
        return this.element
    }
}