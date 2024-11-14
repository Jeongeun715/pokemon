import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { FamilyContext } from "../context/FamilyContext";

const DashList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;

const MyPokemon = styled.div`
  margin-bottom: 20px;
  color: rgb(255, 0, 0);
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
`;

const ListAlign = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const Pokeball = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

function Dashboard() {
  //Dex에서 myPokemon 배열을 프롭스로 전달받음, 추가된 포켓몬 객체가 저장되어있음
  const { myPokemon, setMyPokemon } = useContext(FamilyContext);

  const removePokemon = (pokemonId) => {
    setMyPokemon((prev) => prev.filter((p) => p.id !== pokemonId)); // 전달된 id의 포켓몬 삭제
  };

  const remainingSlots = 6 - myPokemon.length; // 남은 포켓볼 개수 계산
  return (
    <div>
      <DashList>
        <MyPokemon>나만의 포켓몬</MyPokemon>
        <ListAlign>
          {/* 추가된 포켓몬 렌더링 */}
          {myPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              image={pokemon.img_url}
              name={pokemon.korean_name}
              number={pokemon.id}
              isRemovable
              onRemove={() => removePokemon(pokemon.id)} // 삭제 핸들러 호출
            />
          ))}

          {/* 남은 포켓볼 슬롯 렌더링 */}
          {Array.from({ length: remainingSlots }).map((index) => (
            <Pokeball key={`empty-${index}`}>
              <img
                src="/assets/pokeball-13iwdk7Y.png"
                alt="pokeball"
                width={50}
              />
            </Pokeball>
          ))}
        </ListAlign>
      </DashList>
    </div>
  );
}

export default Dashboard;
