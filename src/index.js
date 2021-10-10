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
        main.innerHTML += i.render()
    })
}

async function renderComments() {
    const comments = await apiService.fetchComments()
    main.innerHTML = ""
    comments.map(comment => {
        const c = new Comment(comment)
        main.innerHTML += c.render()
    })
}

function displayCommentForm() {
    let form = document.querySelector("#new-comment-form")
    let html = `
    <form>
    <input type="hidden" value="${e.target.dataset.id}">
    <label>Title:</label>
    <input type="text" name="title"</input>
    <label>Description:</label>
    <input type="text" name="description"</input>
    <br>
    <input type="submit" value="Create Comment">
    </form>
    `
    form.innerHTML = html
    document.querySelector('comment-form').addEventListener('submit', createComments)
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

async function displaycomments(id) {
    const coms = await apiService.getComments(id)
    const comment = new Comment(coms)
    data.innerHTML = comment.renderComment()
    if (info.comments) {
        info.comments.forEach(comment => {
            main.innerHTML += `
            <li><a href="#" data-id="${comment.id}" data-info-id="${info.id}" >${info.name}</a></li>
            <br>
            `
        })
        document.getElementById('add-comment').addEventListener('click', displaycomments)
  
    }
}

async function displayInfo(e){
    let id = e.target.dataset.id
    const data = await apiService.getInfo(id)
    const info = new Info(data)
    main.innerHTML = info.renderInfo()
    
}

load()
