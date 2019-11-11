var pokedex; //set the global pokedex variable
function preload() {
  //get the JSON pokedex file
  pokedex = loadJSON("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
}

function setup() {
  noCanvas();
  //get the pokedexNumber passed by the previous page in the URL
  var myUrl = new URL(window.location.href);
  pokedexNumber = myUrl.searchParams.get("pokedexNumber");
  //get the name of the pokemon
  var pokemonName = pokedex[pokedexNumber].name.english
  //get the japanese name of the pokemon
  var pokemonNameJappo = pokedex[pokedexNumber].name.japanese
  //normalize the ID (from 1 to 99) to be correct to select the image from the server
  //es: the ID from JSON is "9" and become "009"
  var pokemonID = pokedex[pokedexNumber].id
  if (pokemonID < 10) {
    pokemonID = "00" + pokemonID;
  } else if (pokemonID < 100) {
    pokemonID = "0" + pokemonID;
  }
  //display pokemon's id in a h1 element in the body
  createElement("h1", "#" + pokemonID);
  //set the title of the page to pokemon's name
  createElement("title", pokemonName)
  //get the image from the server and display it
  var myImage = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/" + pokemonID + ".png"
  createImg(myImage);
  //display the pokemon name in english and in japanese
  createElement("h1", pokemonName + " | " + pokemonNameJappo);
}
