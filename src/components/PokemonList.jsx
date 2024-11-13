import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "./MOCK_DATA";
import { FamilyContext } from "../context/FamilyContext";
import Swal from "sweetalert2";

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

const PokemonList = () => {
  const { myPokemon, setMyPokemon } = useContext(FamilyContext);

  const handleAddPokemon = (pokemon) => {
    //선택한 포켓몬을 대시보드에 추가
    //pokemon은 추가하려는 포켓몬 객체{ id: 1, korean_name: "이상해씨"... }

    if (myPokemon.length >= 6) {
      Swal.fire({
        icon: "error",
        text: "최대 6마리의 포켓몬만 추가할 수 있습니다!",
      });
      return;
    }

    if (myPokemon.find((p) => p.id === pokemon.id)) {
      Swal.fire({
        icon: "warning",
        text: "이미 추가된 포켓몬 입니다.",
      });
      return;
    }

    setMyPokemon((prev) => [...prev, pokemon]); // 중복이 없으면 추가
  };

  // const [data, setData] = useState(MOCK_DATA);

  // useEffect(() => {
  //   setData(MOCK_DATA);
  // }, []);

  return (
    <CardList>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            image={pokemon.img_url}
            name={pokemon.korean_name}
            number={pokemon.id}
            onAdd={() => {
              handleAddPokemon(pokemon);
            }} // 부모 컴포넌트의 onAddPokemon 호출
          />
        );
      })}
    </CardList>
  );
};

export default PokemonList;
