import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pokemonLogo from "../assets/pokemon-logo-RN0wntMB.png";
const StartButton = styled.button`
  background-color: red;
  cursor: pointer;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  &:hover {
    background-color: rgb(200, 0, 0); /* 마우스 오버 시 색상 변경 */
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center>
        <img src={pokemonLogo} alt="Pokemon Logo" width={600} />

        <StartButton
          onClick={() => {
            navigate("/dex");
          }}
        >
          포켓몬 도감 시작하기
        </StartButton>
      </Center>
    </>
  );
};

export default Home;
