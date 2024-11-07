import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  const handleAddPokemon = (pokemon) => {
    //선택한 포켓몬을 대시보드에 추가
    //pokemon은 추가하려는 포켓몬 객체{ id: 1, korean_name: "이상해씨"... }

    if (myPokemon.length >= 6) {
      alert("최대 6마리의 포켓몬만 추가할 수 있습니다!"); // 알림 메시지
      return;
    }

    if (myPokemon.find((p) => p.id === pokemon.id)) {
      alert("중복값은 추가할 수 없습니다.");
      return;
    }

    setMyPokemon((prev) => [...prev, pokemon]); // 중복이 없으면 추가
  };

  const removePokemon = (pokemonId) => {
    setMyPokemon((prev) => prev.filter((p) => p.id !== pokemonId)); // 전달된 id의 포켓몬 삭제
  };

  return (
    <div>
      <Screen>
        <Dashboard myPokemon={myPokemon} removePokemon={removePokemon} />{" "}
        {/* Dashboard에 상태 전달 */}
        <PokemonList onAddPokemon={handleAddPokemon} />{" "}
        {/* PokemonList에 핸들러 전달 */}
      </Screen>
    </div>
  );
};

export default Dex;
