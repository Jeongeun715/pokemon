import React, { useState } from "react";
import { FamilyContext } from "./FamilyContext";

const PokomonProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState([]);
  //패밀리는 벨류를 내리기 위한것
  return (
    <FamilyContext.Provider value={{ myPokemon, setMyPokemon }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default PokomonProvider;
