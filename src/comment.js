class Comment {
    constructor({id, title, description, info_id}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.info_id = info_id
    }
    renderComments() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.title}</a>
        </li>
        `
    }
    renderComment() {
        return `
        <div class="comment_data">
        <h1>${this.title}</h1>
        <p ${this.description}</p>
        </div>
        `
    }
}