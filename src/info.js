class Info{
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
        <div id="planet-container">
        <h1>${this.name}</h1>
        <h2>Galaxy:</h2>
        <h2> ${this.galaxy}</h2>
        <h2>Moons:</h2>
        <h2> ${this.moons}</h2>
        <h2>Mass:</h2>
        <h2> ${this.mass}</h2>
        <h2>Gravity:</h2>
        <h2> ${this.gravity}</h2>
        <h2>Discovery Date:</h2>
        <h2> ${this.discoveryDate}</h2>
        </div>
        <button id="add-comment" data-id"${this.id}>Add Comment</button>
        <div id="create-comment"</div>
        `
    }
}