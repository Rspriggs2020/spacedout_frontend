const baseUrl = `http://localhost:3000`;

const commentCall = new CommentApi(baseUrl);
commentCall.getComments() 

const form = document.getElementById("comment-form");

const selection = document.getElementById("info_dropdown");
const titleValue = document.getElementById("comment-input");
const descriptionValue = document.getElementById("comment-description")


//info code section
const infoCall = new InfoApi(baseUrl);
infoCall.getInfos()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    commentCall.createComments()
}
