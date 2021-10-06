class InfoApi {
    constructor(port){
        this.port = port
    }
    getInfos(){
        fetch(`${this.port}/infos`)
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                //debugger
                const i = new Info(element)
                i.addToDrop()
            })
        })
    }
}