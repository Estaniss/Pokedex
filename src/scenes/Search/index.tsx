import React, { useEffect, useState } from "react";
import Search from "./Search";
import { PokemonTypeData } from "../../utils/types";
import { PokemonApi } from "../../api";

const SearchContainer: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonTypeData>();
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const getPoke = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const name = event.target.value.toString().toLowerCase();
    setPokemonName(name);
  };

  const searchPokemon = async () => {
    try {
      const data = await PokemonApi.getPokemonData(pokemonName);
      const {
        name,
        sprites: { front_default },
        height,
        weight,
        types,
        id,
      } = data;
      setPokemonData({
        name,
        image: front_default,
        height,
        weight,
        typeNameOne: types[1]?.type?.name,
        typeNameTwo: types[0].type.name,
        id,
      });
    } catch (error) {
      alert(`${pokemonName} não é um Pokemon valido`);
    }
  };

  useEffect(() => {
    searchPokemon();
  }, []);
  return (
    <Search
      pokemonData={pokemonData}
      searchPokemon={searchPokemon}
      getPoke={getPoke}
    />
  );
};

export default SearchContainer;
