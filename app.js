const pokecontainer = document.getElementById("pokemon_container1");
const pokemonsIWant = 400; //hvor mange pokemons der hentes ind -1
let pokemonsArray = [];




let addAllPokemonsToList = async () =>{
    let poke = null;
    for (let index = 1; index < pokemonsIWant; index++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${index}`
        
        var xd = fetch(url)

        var res = await xd.json()





        fetch(url)
        .then(function(response) {
            return response.json();
            })
            .then(function(data) {
            poke = {
                name:data.name
            }
            .then( () => {pokemonsArray.push(poke)})   
            console.log(poke)
            

    })
    
    
        
        
    
}

}


addAllPokemonsToList();
console.log(pokemonsArray);
console.log('length: ' + pokemonsArray.length);

let getPokemons = function(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // ved ikke helt hvordan fetch virker, men vi holder det bare sådan
    fetch(url)
     .then(response => response.json())
     .then(data => {
         //den data vi gerne vil have fat i
        pokemon = {
            name:data.name,
            id:data.id,
            image:data.sprites['front_default']
            
        }
        pokemonsArray.push(pokemon);
        //displayPokemon(pokemon);
     }   
     

     )
     
}


/*
pokemon = {
name:'hej',
id:'1',
image:'string'
}
let asd = () =>{
for (let index = 0; index < 3; index++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    // ved ikke helt hvordan fetch virker, men vi holder det bare sådan
    fetch(url)
     .then(response => response.json())
     .then(data => {
         //den data vi gerne vil have fat i
        pokemon = {
            name:'hej',     //data.name,
            id:'1',     //data.id,
            image:'hej'  //data.sprites['front_default']
            
        }
        pokemonsArray.push(pokemon);
}
}
}
*/


    




    const displayPokemon = function(pokemon){
        // laver en div til hver og adder class navn til den div
        var pokemonEl = document.createElement('div');
        pokemonEl.className = 'pokemon';
        //pokemonEl.onclick = showPicture;
        // vi adder stort bogstav og fjerner lille bogstav efter
        const pokemonName = pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1);

       //hvad der skal tilføjes i hver div
        pokemonEl.innerHTML = `
        <div class="img_container1">
        <img src="${pokemon.image}">
        </div>
        <p class="name"><span id="unik">${pokemon.id}</span>. ${pokemonName}</p>
        `;
        // adder til pokemon container
        document.getElementById("pokemon_container1").appendChild(pokemonEl);

        
    }

    //adder til listen. Må kun køres en gang
    const getAllPokemons = () => {
        for(var i = 1; i < pokemonsIWant; i++){
            getPokemons(i)
        }

    }

  
    
   
    /*
    Dette burde virke i starten
    const url = "https://pokeapi.co/api/v2/pokemon/${id}"
    const res = fetch(url);
    const pokemon = res.json();
    console.log(pokemon);*/





    const search = document.getElementById('search_bar');
    


    search.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        console.log(searchString)
    
        const filteredPokemons = pokemonsArray.filter((poke) => {
            return (
                poke.name.toLowerCase().includes(searchString)
            );
        });
        //displayCharacters(filteredPokemons);
    });



















    const displayPokemonFromArray = ar => {
       
        ar.forEach(element => {
            
        });
    }
    

    displayPokemonFromArray(pokemonsArray);

    
    //console.log(Object.keys(pokemonsArray).length);
 
