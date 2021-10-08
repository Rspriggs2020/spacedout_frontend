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
            body: JSON.stringify(commentInfo)
        }
        fetch(this.baseUrl + `/comments`, configObject)
        .then(response => response.json())
        .then(data => { 
            const c = new Comment(data)
            c.attachToDom()
        })
    }
    deleteComments(e) {
        
    }
}