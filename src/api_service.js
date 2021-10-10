class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000'
    }

    async getInfos() {
        let response = await fetch(this.baseUrl + `/infos`)
        let data = await response.json()
        return data
    }

    async getComments() {
        let response = await fetch(this.baseUrl + `/comments`)
        let data = await response.json()
        return data
    }

    async getInfo(id) {
        let response = await fetch(this.baseUrl + `/infos/${id}`)
        let data = await response.json()
        return data
    }
    async getComment(id) {
        let response = await fetch(this.baseUrl + `/comments/${id}`)
        let data = await response.json()
        return data
    }
    
}