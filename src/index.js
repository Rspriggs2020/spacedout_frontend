const apiService = new ApiService()

let data = document.getElementById('data')

function eventListener() {
    document.getElementById('infos').addEventListener('click')
}

async function renderInfos() {
    const infos = await apiService.getInfos()
    data.innerHTML = ""
    infos.map(info => {
        const i = new Info(i)
        data.innerHTML += i.render() 
    })
}