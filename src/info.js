class Info {
    constructor({copyright, date, explanation, hdurl, media_type, image, title, url, id}) {
        this.copyright = copyright
        this.date = date
        this.explanation = explanation
        this.hdurl = hdurl
        this.media_type = media_type
        this.image = image
        this.title = title
        this.url = url
        this.id = id
    }
    getInfos() {
        fetch(`${this.port}/infos`)
        .then(response => response.json())
        .then(data => {
            for(const info of data){
                let i = new Info(info)
                c.attachToDom()
            }
        })
        .catch()
    }
}