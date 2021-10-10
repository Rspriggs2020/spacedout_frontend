const apiService = new ApiService()
let main = document.getElementById('main')

const load = () => {
    getEventListener()
    renderInfos()
}

function getEventListener() {
    document.getElementById('comment-form').addEventListener('click', displayCommentForm)
    document.getElementById('infos').addEventListener('click', renderInfos)
}

async function renderInfos() {
    const infos = await apiService.fetchInfos()
    main.innerHTML = ""
    infos.map(info => {
        const i = new Info(info)
        main.innerHTML = i.render()
    })
    linkToClick()
}

async function renderComments() {
    const comments = await apiService.fetchComments()
    comments.infos = document.getElementById('main')
    comments.map(comment => {
        const c = new Comment(comment)
        comments.innerHTML = c.render()
    })
}

function displayCommentForm() {
    let formInput = document.querySelector("#new-comment-form")
    let input = `
    <form>
    <label>Title:</label>
    <input type="text" name="title"</input>
    <label>Description:</label>
    <input type="text" name="description"</input>
    <br>
    <input type="submit" value="Create Comment">
    </form>
    `
    formInput.innerHTML = input
    document.querySelector('form').addEventListener('submit', createComments)
}

async function createInfos(e){
    e.preventDefault()
    let main = document.getElementById('main')
    let info = {
        name: e.target.querySelector('#name').value
    }
    let data = await apiService.getCreateInfo(info)
    let newInfo = new Info(data)
    main.innerHTML += newInfo.render()
}

async function createComments(e) {
    e.preventDefault()
    const infoId = document.querySelector("#add-comment").dataset.id
    let main = document.getElementById('main')
    let comment = {
        info_id: infoId,
        title: e.target.querySelector("#title").value,
        description: e.target.querySelector("#description").value,
    }
    let data  = await apiService.getCreateComment(comment)
    let newComment = new Comment(data)
    main.innerHTML += newComment.renderComment()
    clickToCreateComment()
}

async function displayComments() {
    let id = e.target.dataset.id
    const data = await apiService.fetchComments(id)
    const comment = new Comment(data)
    main.innerHTML = comment.renderComment()
}

async function displayInfo(id){
    const data = await apiService.fetchInfo(id)
    const info = new Info(data)
    main.innerHTML = info.renderInfo()
    if (info.comments) {
        info.comments.forEach(comment => {
            main.innerHTML += `
            <li><a href="#" data-id="${comment.id}" data-info-id="${info.id}" >${info.name}</a></li>
            <br>
            `
        })
        linkToComments()
    }
    document.getElementById('add-comment').addEventListener('click', displayCommentForm)
    
}

function linkToClick() {
    const infos = document.querySelectorAll("li a")
    infos.forEach(info => {
        info.addEventListener('clcik', (e) => displayInfo(e.target.dataset.id))
    })
}

function linkToComments() {
   const comments = document.querySelectorAll("li a")
   comments.forEach(comment =>
    comment.addEventListener('click', displayComments))
}

function clickToCreateComment(){
    const comments = document.querySelectorAll("li a")
    comments.forEach(comment => {
        comment.addEventListener('click', displayComments)
    })
}

load()