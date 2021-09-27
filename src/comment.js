class Comment {
    constructor({id, title, description, info_id}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.info_id = info_id;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `comment-${id}`;
        debugger
    }

}