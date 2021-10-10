class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000'
    }

    async getInfos() {
        let response = await fetch(this.baseUrl + '/infos')
        let data = await response.json()
        return data
    }
}