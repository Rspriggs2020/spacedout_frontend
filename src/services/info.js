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
    //constructor(data){
      //  this.name = data.name
        //this.galaxy = data.galaxy
        //this.moons = data.moons
        //this.mass = data.mass
        //this.gravity = data.gravity
        //this.discoveryDate = data.discoveryDate
        //this.id = data.id
   // }
    
    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a>
        </li>

        `
    }

    renderInfo() {
        return `
    
        <h2>${this.name}</h2>
        <h2>Galaxy:</h2>
        <h1> ${this.galaxy}</h1>
        <h2>Moons:</h2>
        <h1> ${this.moons}</h1>
        <h2>Mass:</h2>
        <h1> ${this.mass}</h1>
        <h2>Gravity:</h2>
        <h1> ${this.gravity}</h1>
        <h2>Discovery Date:</h2>
        <h1> ${this.discoveryDate}</h1>
        
        <button id="add-comment" data-id="${this.id}">Add Comment</button>
        <div id="add-comment-from"</div>
        `
    }
}