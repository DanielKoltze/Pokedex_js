const pokecontainer = document.getElementById("pokemon_container1");
const pokemonsIWant = 270; //hvor mange pokemons der hentes ind -1
let pokemonsArray = [];


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
        pokemonsArray.push(pokemon);
        displayPokemon(pokemon);
     }   
     

     )
     
}
    
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





    const search = document.getElementById('search_bar');
    console.log(search);


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


 
