var pokedex; // will contain the pokedex JSON file
var myButton; // button that add a pokemon
var squadNumber = 0; // count the pokemon in yout team
var tabList = []

function preload() {
  //load the pokedex JSON file
  pokedex = loadJSON("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
}

function setup() {
  noCanvas();
  //crate a container for the button using the #buttonContainer element in the body
  var buttonContainer = select("#buttonContainer");
  //create the button element "myButton"
  myButton = createElement("button", "+ make your team! +");
  myButton.parent(buttonContainer); //it's inside #buttonContainer
  myButton.mousePressed(addPokemon); //run the function "addPockemon" when click on myButton

}

function draw() {

}

//that functon add a pokemon to the team (max 6 pokemons) and displays them
//it's called clicking on "myButton"
function addPokemon() {
  //increase the number of pokemon
  squadNumber++
  //add a pokemon only if the team is incomplete (less than 6 pokemons)
  if (squadNumber <= 6) {
    //choose a random pokemon from the JSON file using its pokedex number
    var pokedexNumber = round(random(808))
    //get the english name of the pokemon
    var text = pokedex[pokedexNumber].name.english
    //normalize the ID (from 1 to 99) to be correct to select the image from the server
    //es: the ID from JSON is "9" and become "009"
    var pokemonID = pokedex[pokedexNumber].id
    if (pokemonID < 10) {
      pokemonID = "00" + pokemonID;
    } else if (pokemonID < 100) {
      pokemonID = "0" + pokemonID;
    }    //get the correct image from the server using "pokemonID"
    var image = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/" + pokemonID + "MS.png"
    //create the pokemon's tab in the body
    var tempTab = createElement("div", "");
    tempTab.class("grid-item");
    //put it in the container of the tabs
    var container = select("#container");
    tempTab.parent(container);

    //put the image in the tab
    var tempImg = createImg(image);
    tempImg.parent(tempTab);
    tempImg.class("pokePreview")

    //put the text in the tab
    var tempText = createElement("p", text);
    tempText.parent(tempTab);

    //create a function
    //that START with the CLICK on the tab
    //and create a NEW PAGE with the bigger image of the pokemon and other infos
    tempTab.mousePressed(function() {
      //open create the page and pass the "pokedexNumber" value
      window.open("page2.html?pokedexNumber=" + pokedexNumber)
    })
  }
  //if the squad is complete (6 pokemos)
  //change the aspect of myButton
  if(squadNumber == 6){
    myButton.html("ready for the Pokémon League!");
    myButton.style("color","green");
  }

}
