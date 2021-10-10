class Info {
    static all = [];
    static cont = document.getElementById("info-catch");
    constructor({name, galaxy, moons, mass, gravity, discoveryDate, id}) {
        this.name = name
        this.galaxy = galaxy
        this.moons = moons
        this.mass = mass
        this.gravity = gravity
        this.discoveryDate = discoveryDate
        this.element = document.createElement('li');
    
        this.id = id
    }
    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a>
        </li>
        `
    }

    renderInfo() {
        this.element.innerHTML = `
        <div class="info_data">
        <h1>${this.name}</h1>
        <p ${this.galaxy}</p>
        <p ${this.moons}</p>
        <p ${this.mass}</p>
        <p ${this.gravity}</p>
        <p ${this.discoveryDate}</p>
        </div>
        `
        return this.element
    }


}