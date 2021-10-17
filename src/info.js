class Info{
    constructor({name, galaxy, moons, mass, gravity, discoveryDate, id, comment_id}) {
        this.name = name
        this.galaxy = galaxy
        this.moons = moons
        this.mass = mass
        this.gravity = gravity
        this.discoveryDate = discoveryDate
        this.id = id
        this.comment_id = comment_id
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
        
        <button id="add-comment" data-id"${this.id}" data-comment-id="${this.comment_id}"Add Comment</button>
        <div id="add-comment-from"</div>
        `
    }
}