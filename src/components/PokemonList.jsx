import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "./MOCK_DATA";

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

const PokemonList = ({ onAddPokemon }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(MOCK_DATA);
  }, []);

  return (
    <CardList>
      {data.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            image={pokemon.img_url}
            name={pokemon.korean_name}
            number={pokemon.id}
            onAdd={() => {
              onAddPokemon(pokemon);
            }} // 부모 컴포넌트의 onAddPokemon 호출
          />
        );
      })}
    </CardList>
  );
};

export default PokemonList;
