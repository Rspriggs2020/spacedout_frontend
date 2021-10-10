class Info {
    constructor(data) {
        this.name = data.name
        this.galaxy = data.galaxy
        this.moons = data.moons
        this.mass = data.mass
        this.gravity = data.gravity
        this.discoveryDate = data.discoveryDate
        this.id = data.id
    }
    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a>
        </li>
        `
    }

    renderInfo() {
        return `
        <div class="info_data">
        <h1>${this.name}</h1>
        <p ${this.galaxy}</p>
        <p ${this.moons}</p>
        <p ${this.mass}</p>
        <p ${this.gravity}</p>
        <p ${this.discoveryDate}</p>
        </div>
        `
    }
}