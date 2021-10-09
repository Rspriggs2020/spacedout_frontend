class Info {
    constructor({image, date, caption, centroid_coordinates, dscovr_j2000_position, lunar_j2000_position, sun_j2000_position, attitude_quaternions, id}) {
        this.image = image
        this.date = date
        this.caption = caption
        this.centroid_coordinates = centroid_coordinates
        this.dscovr_j2000_position = dscovr_j2000_position
        this.lunar_j2000_position = lunar_j2000_position
        this.sun_j2000_position = sun_j2000_position
        this.attitude_quaternions = attitude_quaternions
        this.id = id
    }
    addToSelection(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.title
        selection.appendChild(option)
    }

    renderInfo() {
        this.element.innerHTML = `
        <div info-id="${this.id}">
        <h1 class="image">${this.image}</h1>
        <p class="date">${this.caption}</p>
        <p class="date">${this.centroid_coordinates}</p>
        <p class="date">${this.dscovr_j2000_position}</p>
        <p class="date">${this.lunar_j2000_position}</p>
        <p class="date">${this.sun_j2000_position}</p>
        <p class="date">${this.attitude_quaternions}</p>
        </div>
        `
        return this.element
    }
}