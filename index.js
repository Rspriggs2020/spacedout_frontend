const port = `http://localhost:3000/`;
const commentCall = new CommentApi(port);
const form = document.getElementById("comment-form");
const dropDown = document.getElementById("info_dropdown");
const titleValue = document.getElementById("comment-input");
const descriptionValue = document.getElementById("comment-description")
commentCall.getComments()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    commentCall.createComments()
}
