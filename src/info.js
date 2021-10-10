class Info {
    constructor({name, isPlanet, moons, mass, gravity, discoveredBy, discoveryDate, id}) {
        this.name = name
        this.isPlanet = isPlanet
        this.moons = moons
        this.mass = mass
        this.gravity = gravity
        this.discoveredBy = discoveredBy
        this.discoveryDate = discoveryDate
    
        this.id = id
    }
    renderInfoList() {
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
        <p ${this.isPlanet}</p>
        <p ${this.moons}</p>
        <p ${this.mass}</p>
        <p ${this.gravity}</p>
        <p ${this.discoveredBy}</p>
        <p ${this.discoveryDate}</p>
        </div>
        `
    }


}