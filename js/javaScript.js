const pokemonContainer = document.querySelector(".pokemon-container");

const url = "https://pokemon-go1.p.rapidapi.com/pokemon_names.json";

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      createPokemon(data);
    });
}

function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer)


  const card = document.createElement("div");
  card.style.border = "1px solid var(--bg-celeste)";
  card.style.borderRadius = "10px";
  card.style.padding = "5px";
  // card.style.backgroundColor = "";
  card.style.boxShadow = "  ";

  const spitContainer = document.createElement("div");
  spitContainer.classList.add("img-container");

  console.log(pokemon);

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spitContainer.appendChild(sprite);

  const number = document.createElement("p");
  //number.textContent = `#${pokemon.id.tostring.padstart(3,0)}`;
  number.textContent = `#${pokemon.id}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;


  card.appendChild(spitContainer);
  card.appendChild(number);
  card.appendChild(name);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");
  
  const imgBack = document.createElement("img");
  imgBack.src = (pokemon.sprites.back_default) ? pokemon.sprites.back_default : pokemon.sprites.front_default;
  cardBack.appendChild(imgBack);
  
  const cardZoom = document.createElement("div");
  cardZoom.classList.add("pokemon-block-zoom");
  const imgZoom = document.createElement("img");
  cardZoom.style.display = "none";
  imgZoom.src = pokemon.sprites.other['official-artwork'].front_default;
  cardZoom.appendChild(imgZoom);
  
  
  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  //pokemonContainer.appendchild(card);
  cardContainer.appendChild(cardZoom);
  pokemonContainer.appendChild(flipCard);

  cardBack.addEventListener("click", () => {
    cardContainer.style.position="static"
    cardBack.style.position="static"
    cardBack.style.display = "none";
    cardZoom.style.display = "block";
    
  });
  cardZoom.addEventListener("click", () => {
    cardContainer.style.position="relative"
    cardBack.style.position="absolute"
    cardBack.style.display = "block";
    cardBack.style.position = "absolute";
    cardZoom.style.display = "none";
  });
 
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe5af385eemshda7a944ab14de35p19bba6jsn2edb6a74e803",
    "X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com",
  },
};

let boton = document.getElementById("btn");

boton.addEventListener("click", (e) => {
  e.preventDefault;
  fetchData();
});

async function fetchData() {
  try {
    const response = await fetch(url, options);
    // console.log(response)

    const result = await response.json();

    //   console.log( Object.values(result)[0].name)

    let vec = Object.values(result);
    //return vec;

    while (pokemonContainer.firstChild) {
      pokemonContainer.removeChild(pokemonContainer.firstChild);
    }

    let input = document.querySelector("input");

    if (input.value.trim == 0)
      return alert(`ingrese una palabra`);

    // console.log(vec[0])

    for (let i = 0; i < vec.length; i++) {
      let bandera = 0;

      for (let j = 0; j < input.value.length; j++) {
        if (
          input.value.toLowerCase().charAt(j) ==
          vec[i].name.toLowerCase().charAt(j)
        )
          bandera++;
        else
          break;
      }

      if (input.value.length == bandera)
        fetchPokemon(vec[i].id);

    }
  } catch (error) {
    console.error(error);
  }
}



//fetchData();
