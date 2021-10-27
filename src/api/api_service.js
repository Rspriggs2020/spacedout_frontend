class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000'
    }

    async fetchInfos() {
        let response = await fetch(this.baseUrl + `/infos`)
        let data = await response.json()
        return data
    }

    async fetchComments() {
        let response = await fetch(this.baseUrl + `/comments`)
        let data = await response.json()
        return data
    }

    async fetchInfo(id) {
        let response = await fetch(this.baseUrl + `/infos/${id}`)
        let data = await response.json()
        return data
    }
    async fetchComment(id) {
        let response = await fetch(this.baseUrl + `/comments/${id}`)
        let data = await response.json()
        return data
    }

    //configObject
    async getCreateInfo(infoData) {
        let configObject = {
            method: 'POST',
            body: JSON.stringify(infoData),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
        let response = await fetch(`${this.baseUrl}/infos`, configObject)
        let data = await response.json()
        return data
    }

    async getCreateComment(commentData) {
        let configObject = {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
        let response = await fetch(`${this.baseUrl}/comments`, configObject)
        let data = await response.json()
        return data
    }

    async getDeleteComment(id){
        let configObject = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
        let response = await fetch(this.baseUrl + `/comments/${id}`, configObject)  
    }
}