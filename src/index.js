const apiService = new ApiService()

let data = document.getElementById('data')

function eventListener() {
    document.getElementById('form').addEventListener('click', createCommentForm)
    document.getElementById('comments').addEventListener('click', renderComments)
}

async function renderInfos() {
    const infos = await apiService.getInfos()
    data.innerHTML = ""
    infos.map(info => {
        const i = new Info(i)
        data.innerHTML += i.render() 
    })
}

async function renderComments() {
    const comments = await apiService.getComments()
    data.innerHTML = ""
    comments.map(comment => {
        const c = new Comment(c)
        data.innerHTML += c.render()
    })
}

function createCommentForm() {
    let form = document.querySelector("comment-form")
    let input = `
    <form>
    <label>Title:</label>
    <input type="text" name="title" id="comment-input"></input>
    <label>Description:</label>
    <input type="text" name="description" id="comment-description"></input>
    <br>
    <input type="submit" value="Create Comment">
    </form>
    `
    form.innerHTML = input
    document.querySelector('form').addEventListener('submit', renderComments)
}

async function displaycomments(e) {
    let id = e.target.dataset.id
    const coms = await apiService.getComments(id)
    const comment = new Comment(coms)
    data.innerHTML = comment.renderComments()
  

}

