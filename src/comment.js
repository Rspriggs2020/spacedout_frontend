class Comment {
    constructor({id, comment_title, description, info_id}) {
        this.id = id
        this.comment_title = comment_title
        this.description = description
        this.info_id = info_id

       
    }
    renderComments() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.comment_title}</a> 
        </li>
        <br>
        <button id="create-comment" data-id="${info.id}">Create Comment</button>
        `
    }
    renderComment() {
        return `
        <h3>Title:</h3>
        <h2>${this.comment_title}</h2>
        <br>
        <h3>Description:</h3>
        <h2>${this.description}</h2>
        <br>
        <button id="delete-comment" data-id="${this.id}">Delete</button>
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