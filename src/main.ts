import { PokemonClient, EggGroup, POKEMON_HABITATS } from 'pokenode-ts'; // import the GameClient and the Pokedexes enum

const title = document.createElement("h1");
title.textContent = "¡Hola desde TypeScript!";
document.body.appendChild(title);



(async () => {
  const api = new PokemonClient(); // create a GameClient

  await api
    .getPokemonHabitatById(POKEMON_HABITATS.MONTAIN)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

})();