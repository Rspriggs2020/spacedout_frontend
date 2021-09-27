class CommentApi {
    constructor(port) {
        this.port = port;
    }
    getComments() {
        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => {
            for(const comment of data){
                let c = new Comment(comment)
                c.attachToDom()
            }
        })
    }
}