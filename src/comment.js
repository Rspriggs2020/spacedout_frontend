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
        <a href="#" data-id="${this.id}">${this.title}</a>
        </li>
        <button id="create-comment" data-id="${comment.id}">Create Comment</button>
        `
    }
    renderComment() {
        return `
        <h1>Title</h1>
        <h1>${this.title}</h1>
        <h2>Description:</h2>
        <h2>${this.description}</h2>
        </div>
      
        <button id="delete-comment" data-id="${this.id}" data-comment-id="${this.info_id}">Delete</button>
        `
    }
}