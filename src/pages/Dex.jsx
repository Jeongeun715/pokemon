import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import PokomonProvider from "../context/PokomonProvider";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Dex = () => {
  return (
    <div>
      <Screen>
        <Dashboard />
        <PokemonList />
      </Screen>
    </div>
  );
};

export default Dex;
