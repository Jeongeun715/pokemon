import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import { FamilyContext } from "../context/FamilyContext";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  return (
    <div>
      <Screen>
        <FamilyContext.Provider value={{ myPokemon, setMyPokemon }}>
          <Dashboard />
          <PokemonList />
        </FamilyContext.Provider>
      </Screen>
    </div>
  );
};

export default Dex;
