class Comment {
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
        <button id="create-comment" data-id="${comment.id}">Create Comment</button>
        `
    }
    renderComment() {
        return `
        <div data-id="${this.id}">
        <h1 class="title">${this.title}</h1>
        <p class="description">${this.description}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit</button>
        <button class="delete" data-id=${this.id}>Delete</button>
        `
    }
}