import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MOCK_DATA from "./MOCK_DATA"; // 포켓몬 데이터
import { useNavigate } from "react-router-dom";

const Align = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  unicode-bidi: isolate;
`;

const Name = styled.h2`
  margin: 20px 0px;
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

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
  &:hover {
    border: 1px solid blue;
  }
`;

const DetailInfo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); //뒤로가기
  };

  return <Button onClick={handleBack}> 뒤로가기</Button>;
};

function PokemonDetail() {
  const { id } = useParams(); // URL에서 포켓몬 ID 가져오기
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const selectedPokemon = MOCK_DATA.find((p) => p.id === Number(id)); // ID로 포켓몬 찾기
    setPokemon(selectedPokemon);
  }, [id]);

  if (!pokemon) {
    return <p>포켓몬 정보를 불러오는 중...</p>;
  }

  return (
    <>
      <Align>
        <img src={pokemon.img_url} alt={pokemon.korean_name} width={200} />
        <Name>{pokemon.korean_name}</Name>
        <P>타입: {pokemon.types}</P>
        <P>{pokemon.description}</P>
        <DetailInfo> </DetailInfo>
      </Align>
    </>
  );
}

export default PokemonDetail;
