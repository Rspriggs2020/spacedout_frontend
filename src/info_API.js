class InfoApi {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    getInfos(){
        fetch(`${this.baseUrl}/infos`)
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                //debugger
                const i = new Info(element)
                i.addToSelection()
            })
        })
    }
}