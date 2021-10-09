class CommentApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getComments() {
        fetch(this.baseUrl + `/comments`)
        .then(response => response.json())
        .then(data => {
            for(const comment of data){
                let c = new Comment(comment)
                c.attachToDom()
            }
        })
        .catch()
    }

    createComments(){
        const commentInfo = {
            comment: {
                title: titleValue.value,
                description: descriptionValue.value,
                info_id: selection.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(coms)
        }
        fetch(this.baseUrl + `/comments`, configObject)
        .then(response => response.json())
        .then(data => { 
            const c = new Comment(data)
            c.attachToDom()
        })
    }
    editComments(c){
        const {title, description, id} = comment
        const commentInfo = {
            title,
            description
        }
        const configObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(commentInfo)
        }
        fetch(`${this.baseUrl}/comments/${id}`, configObject)
        .then(comment.render())
      
    }

    deleteComments(e) {
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.baseUrl}/comments/${id}`, {method: 'DELETE'})
        .then(respone => respone.json())
    }
}