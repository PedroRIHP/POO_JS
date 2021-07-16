class Pokedex {

    getinfo(name) { // get info es para encontrar el name en la api a encontrar el name unicamente
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            //desestructuración           
            console.log(data);
            const [DATA = null] = data;
            const MESSAGE = DATA || `El pokemon ${name} no existe`;

            console.log(MESSAGE);
        })
    }
}

const POKEDEX = new Pokedex ();
POKEDEX.getinfo("charmander");



 console.log("hola aqui estoy")











    /* 
    const lista = ["dragon ball", "code geass", "sailor"];
    const [anime1, anime2, anime3] = lista; // aqui anime 1 es dragon ball y anime2 es codegeas, y anime3 es sailor por que se empata
    console.log(snime2, anime3)

    const Dragon = lista [0];
    const Dragon1 = lista [1];

    const[dragon, code] = lista ;
    console.log(dragon, code); */