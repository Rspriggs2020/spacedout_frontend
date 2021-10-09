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
        this.element.addEventListener('click', this.handleClick)
        Comment.all.push(this)
    }
    //displays title, description, edit and delete
    render() {
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
    //eventListener for update & delete
    handleClick = (e) => {
        if(e.target.innerText === "Edit"){
            console.log(e.target)
            e.target.innerText = "Submit"
            this.editForm()
        }
        else if(e.target.innerText === "Delete"){
            console.log(e.target)
            commentCall.deleteComments(e)
        }
    }

    editForm(){
        const editComment = this.element.querySelector('editComment');
        for (const element of editComment.children) {
            let input = element.innerText;
            let title = element.classList[0];
            element.outerHTML = `<input type="text" class="edit" value="${input}"/>`
        }
    }


    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
}