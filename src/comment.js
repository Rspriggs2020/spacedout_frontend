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
        <br>
        <button id="create-comment" data-id="${info.id}">Create Comment</button>
        `
    }
    renderComment() {
        return `
        <h3>${this.title}</h3>
        <hr>
        <br>
        <h4>Description:</h4>
        <h4>${this.description}</h4>
        <br>
        <button id="delete-comment" data-id="${this.id}" data-comment-id="${this.info_id}">Delete</button>
        `

    }

    //handleClick = (e) => {
      //  if(e.target.innerText === "Edit"){
        //    console.log(e.target)
           // e.target.innerText = "Submit"
           // this.editForm()
       // }
       // else if(e.target.innerText === "Delete"){
        //    console.log(e.target)
          //  commentCall.deleteComments(e)
       // }
    //}
}