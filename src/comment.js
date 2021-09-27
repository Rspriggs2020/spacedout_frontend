class Comment {
    static all = [];
    static cont = document.getElementById("comments-catch");
    constructor({id, title, description, info_id}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.info_id = info_id;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `comment-${id}`;
        Comment.all.push(this)
        //debugger
    }
    render() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h1 class="title">${this.title}</h1>
        <p class="description">${this.description}</p>
        </div>
        `
        return this.element
    }

    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
 

}