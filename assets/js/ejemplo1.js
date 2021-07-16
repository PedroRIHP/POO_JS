class Pokemon {
    #name = ""; // el # es privado
    #type = "";
    #evolutions = [];

    constructor(name = charmander, type = fuego , evolutions = []){//con esto lo relleno, si le asigno valores = los pone cuando no relleno esa categoria
        this.#name = name ; //this utiliza los elementos de la clase no los del constructor
        this.#type = type ;
        this.#evolutions = evolutions ;
    }

    /* set es cambiar, get es consultar */

    set name(value){
        this.#name = value;
    }

    set type(value){
        this.#type = value;
    }

    set type(value){
        this.#evolutions = value ;
    }
    get name() {
        return this.#name
    }

    get evolutions() {
        return this.#evolutions
    }

    get type() 

    attack(){
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0){
        const EVOLVE = this.evolutions [evolution] || "";
        let message = "no puedo evolucionar" ;

        if (EVOLVE) { //si EVOLVE se cumple se activa message
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;
    }

    
}


const charmander = new Pokemon("charmander","fuego",["charmaleon", "charizard"]);
const squirtle = new Pokemon ("squirtle", "awa", ["tortugon", "tortugoso" ]);

console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));
console.log(charmander.attack());
