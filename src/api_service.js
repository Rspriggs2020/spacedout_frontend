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
        let response = await fetch(this.baseUrl + `/infos`, configObject)
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
        let response = await fetch(this.baseUrl + `/comments`, configObject)
        let data = await response.json()
        return data
    }

}