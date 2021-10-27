class Info{
    //static sortNames = [];
    constructor({name, galaxy, moons, mass, gravity, discoveryDate, id, comment_id}) {
        this.name = name
        this.galaxy = galaxy
        this.moons = moons
        this.mass = mass
        this.gravity = gravity
        this.discoveryDate = discoveryDate
        this.id = id
        this.comment_id = comment_id
        //this.element = document.createElement('li');
        //this.element.dataset['id'] = id;
        //Info.sortNames.push(this)
        
    }
    
    render() {
        return `
        <ul>
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a>
        </li>
        </ul>

        `
        
    }

    renderInfoOutput() {
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
        
        <button id="add-comment" data-id="${this.id}" data-comment-id="${this.comment_id}">Add Comment</button>
        <div id="add-comment-from"</div>
        `
    }

    //grabSort() {
      // Info.sortNames.sort((a, b) => a - b)
       // console.log(sortNames)
        //return `
        //<li>
        //<a href="#" data-id="${this.id}">${this.name}</a>
        //</li>

        //`
       // Info.sortNames.sort((a, b) => a - b)
        //return

        //this.element.innerHTML = `
      
        //<li>
        //<a href="#" data-id="${this.id}">${this.name}</a>
        //</li>

        //`
        //return this.element
        //Info.sortNames.sort((a, b) => a.name.localeCompare(b.name))
    
       //Info.sortNames.sort((a, b) => a - b)
    //}   //return sortNames
    //}
    //static grabSort() {
      //  Info.sortNames.sort((a, b) => {

        //}
        //)  
        
        //let sortNames = Info.sort()
        //document.getElementById('sort').addEventListener('click', renderInfos)  

 
}