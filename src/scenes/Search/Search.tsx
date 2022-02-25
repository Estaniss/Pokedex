//Pagina principal
import React from "react";
import { PokemonTypeData } from "../../utils/types";

import {
  Title,
  Wrapper,
  Answer,
  Button,
  Input,
  Display,
  Name,
  Status,
  Info,
  Img,
  DisplayInfo,
} from "./styles";

type Props = {
  pokemonData?: PokemonTypeData;
  searchPokemon: () => void;
  getPoke: (event: { target: { value: React.SetStateAction<string> } }) => void;
};

const Search: React.FC<Props> = ({ pokemonData, searchPokemon, getPoke }) => (
  <Wrapper>
    <Title>PokeDex</Title>
    <Answer>Digite aqui o Nome ou o Nº para encontrar um Pokemon</Answer>
    <Input
      placeholder="Digite aqui o Nome ou o Id do Pokemon"
      onChange={getPoke}
    ></Input>
    <Button onClick={searchPokemon}>{"Buscar"}</Button>
    <Display>
      <Name>{pokemonData?.name}</Name>
      <Img src={`${pokemonData?.image}`}></Img>
      <DisplayInfo>
        <Status>Height: </Status>
        <Info>{pokemonData?.height}m</Info>
        <Status>Weight: </Status>
        <Info>{pokemonData?.weight}kg</Info>
        <Status>Type: </Status>
        <Info>
          {pokemonData?.typeNameOne}/{pokemonData?.typeNameTwo}
        </Info>
        <Status>ID: </Status>
        <Info>{pokemonData?.id}</Info>
      </DisplayInfo>
    </Display>
  </Wrapper>
);

export default Search;
