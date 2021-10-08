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
    addToSelection(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.title
        selection.appendChild(option)
    }
}