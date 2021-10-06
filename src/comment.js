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
        //debugger
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
            this.editForm()
        }
        else if(e.target.innerText === "Delete"){
            console.log()
            this.deleteForm(e.target)
        }
        else if(e.target.innerText === "Save"){
        }
    }

    editForm(){
        const div = this.element.querySelector('div');
        debugger
    }


    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
}