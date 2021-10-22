const apiService = new ApiService()
let main = document.getElementById('main')

const load = () => {
    getEventListener()
    renderInfos()
    renderComments()
}

function getEventListener() {
    document.getElementById('form').addEventListener('click', renderInfos)
    document.getElementById('comment').addEventListener('click', renderComments)
}

async function renderInfos() {
    const infos = await apiService.fetchInfos()
    main.innerHTML = ""
    infos.map(info => {
        const i = new Info(info)
        main.innerHTML += i.render()
    })
    linkToClick()
}

async function renderComments() {
    const comments = await apiService.fetchComments()
    main.innerHTML = ""
    comments.map(com => {
        const newComment = new Comment(com)
        main.innerHTML += newComment.renderComments()
    })
    linkToComments()
}

function displayCommentForm(e) {
    let formInput = document.querySelector("#new-comment-form")
    let input = `
    <div id="comment">
    <form>
    <input type="hidden" value="${e.target.dataset.id}">
    <label>Title:</label>
    <input type="text" id="title">
    <label>Description:</label>
    <input type="text" id="description">
    <br>
    <input type="submit" value="Create Comment">
    </form>
    </div>
    `
    formInput.innerHTML = input
    document.querySelector('form').addEventListener('submit', createComment)
}

async function displayComment(e) {
    let id = e.target.dataset.id
    const data = await apiService.fetchComment(id)
    const newComment = new Comment(data)
    main.innerHTML = newComment.renderComment()
    document.getElementById('delete').addEventListener('click', deleteComment)
    
}


async function displayInfo(id){
    const data = await apiService.fetchInfo(id)
    const info = new Info(data)
    main.innerHTML = info.renderInfoOutput()
    linkToComments() 
    if (data.comments) {
        data.comments.forEach(comment => {
            main.innerHTML += `
            <li><a data-id="${comment.id}" data-info-id="${info.id}">${comment.title}</a></li>
            <br>
            `
        })
        linkToComments()  
        
    }
  
    document.getElementById('add-comment').addEventListener('click', displayCommentForm) 
}

async function createComment(e) {
    e.preventDefault()
    const infoId = document.querySelector("#add-comment").dataset.id
    let main = document.getElementById('main')
    let comment = {
        info_id: infoId, 
        title: e.target.querySelector("#title").value,
        description: e.target.querySelector("#description").value
        
    }
    let data = await apiService.getCreateComment(comment)
    let newComment = new Comment(data)
    main.innerHTML = newComment.renderComments()
    clickToCreateComment()
}

async function deleteComment(e) {
    let infoId = e.target.dataset.infoId
    let id = e.target.dataset.id
    const data = await apiService.getDeleteComment(id)
    .then(data => {
        renderInfos(infoId)
    })
}

function commentInfo() {
    document.querySelectorAll("li a").length
    
}

function linkToClick() {
    const infos = document.querySelectorAll("li a")
    infos.forEach(info => {
        info.addEventListener('click', (e) => displayInfo(e.target.dataset.id))
    })
}

function linkToComments() {
   const comments = document.querySelectorAll("li a")
   comments.forEach(comment =>
    comment.addEventListener('click', displayComment))
}

function clickToCreateComment(){
    const comments = document.querySelectorAll("li a")
    comments.forEach(comment => {
        comment.addEventListener('click', displayComment)
    })
}

load()