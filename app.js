const pokecontainer = document.getElementById("pokemon_container1");
const pokemonsIWant = 270; //hvor mange pokemons der hentes ind -1
const getPokemon = function(id){
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // ved ikke helt hvordan fetch virker, men vi holder det bare sådan
    fetch(url)
     .then(response => response.json())
     .then(data => {
         //den data vi gerne vil have fat i
        const pokemon = {
            name:data.name,
            id:data.id,
            image:data.sprites['front_default']
            
        }
        console.log(pokemon)
        
        return pokemon;
     }   
     

     )
     
}


function showPicture(){
        

        
    let element = document.getElementById("unik").innerHTML;
    let tempPokemon = getPokemon(2);
    console.log(element);
    //console.log(getPokemon(element));



}

const getPokemons = function(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // ved ikke helt hvordan fetch virker, men vi holder det bare sådan
    fetch(url)
     .then(response => response.json())
     .then(data => {
         //den data vi gerne vil have fat i
        const pokemon = {
            name:data.name,
            id:data.id,
            image:data.sprites['front_default']
            
        }
        
        displayPokemon(pokemon);
     }   
     

     )
     
}
    
    const displayPokemon = function(pokemon){
        // laver en div til hver og adder class navn til den div
        var pokemonEl = document.createElement('div');
        pokemonEl.className = 'pokemon';
        pokemonEl.onclick = showPicture;
        // vi adder stort bogstav og fjerner lille bogstav efter
        const pokemonName = pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1);
        
        
        let hej = 'hej';

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


    const getAllPokemons = function(){
        for(var i = 1; i < pokemonsIWant; i++){
            getPokemons(i)
        }

    }

    
   


    getAllPokemons();
    



    /*
    Dette burde virke i starten
    const url = "https://pokeapi.co/api/v2/pokemon/${id}"
    const res = fetch(url);
    const pokemon = res.json();
    console.log(pokemon);*/




    






