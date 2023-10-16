//DESARROLLA AQUI TUS SOLUCIONES

/*Ejercicios Pokémon
Utilizando la api de Pokemon https://pokeapi.co/ y usando sólo async/await:
Antes de empezar, lee la documentación de la API para comprender como funcionan los endpoints*/

// numero pokemons total 1010

//https://pokeapi.co/api/v2//{id or name}/
let pokemonAPIBase = "https://pokeapi.co/api/v2/"

//Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
async function getRandomPokemon() {

    let randomid = Math.floor(Math.random() * (1010 - 1) + 1);

    let response = await fetch(pokemonAPIBase + "pokemon/" + randomid + "");
    let data = await response.json();

    return data;
}

//Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen
// de un pokemon => (return {img, name})
//sprites.other.official-artwork.font_default

async function getImageAndName() {
    let randomPkmn = await getRandomPokemon()

    let img = randomPkmn["sprites"]["other"]["official-artwork"]["front_default"]
    let name = randomPkmn["name"]

    return { img, name }

}

//Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

async function printImageAndName() {

    let imgName = await getImageAndName()

    return `<section>
                <img src="${imgName.img}" alt="${imgName.name}">
                <h1>${imgName.name}</h1>
            </section>`

}



//Ejercicios Batalla entre Pokemon y perritos
//Recordatorio, la API de perritos era 'https://dog.ceo/dog-api/'

let dogApiBase = "https://dog.ceo/api/" 


//Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de 
//la imagen de un perro aleatorio

async function getRandomDogImage() {

    let response = await fetch(dogApiBase + "breeds/image/random");
    let data = await response.json();

    return data.message;
}


//Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de 
//un pokemon aleatorio.

async function getRandomPokemonImage() {
    let randomPkmn = await getRandomPokemon()

    let img = randomPkmn["sprites"]["other"]["official-artwork"]["front_default"]
    return img
}

//Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre 
//"Pug" y "Pikachu" (no se testea)

async function printPugVsPikachu(){
    let imgDog = await getRandomDogImage()
    let imgPkmn = await getRandomPokemonImage()
    return `<section>
                <img src="${imgDog}" alt= "el perrito">
                <img src="${imgPkmn}" alt="pokemon">
            </section>`
}


/*Ejercicios con Rick and Morty
Usando la api de Rick and Morty https://rickandmortyapi.com/ y sólo async/await:

Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.*/

let rickApiBase = "https://rickandmortyapi.com/api/"

async function getRandomCharacter() {
    let randomid = Math.floor(Math.random() * (826 - 1) + 1);
    let response = await fetch(rickApiBase + "character/"+ randomid+"");
    let data = await response.json();

    return data;
}



//Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su
// imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece
// + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. 
//Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

async function getRandomCharacterInfo(){

    let character = await getRandomCharacter()

    let img = character["image"]
    let name = character["name"]
    let episodes = character["episode"]
    let firstEpisode = character["episode"][0]
    let dateEpisode = character["created"]

    return {img, name, episodes, firstEpisode, dateEpisode}
}

//Ejercicio 9.- Pinta los anteriores datos en el DOM (no se testea)

async function pintadatos(){
    let characterInfo = await getRandomCharacterInfo()
    let fields = `<img src=${characterInfo.img} alt=${characterInfo.name}>
                    <p> Name: ${characterInfo.name} </p>
                    <p> Episodes: ${characterInfo.episodes} </p>
                    <p> First episode: ${characterInfo.fisrtEpisode} </p>
                    <p> Date First episode: ${characterInfo.dateEpisode} </p>`;
    let section = document.createElement("section")
    section.innerHTML = fields
    document.body.appendChild(section);
}

window.addEventListener("load",()=>{
    pintadatos()
})

