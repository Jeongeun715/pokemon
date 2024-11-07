import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px;
    transform: translateY(-3px);
  }
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0px;
  color: black;
`;

const PokeNumber = styled.p`
  font-size: 12px;
  color: rgb(102, 102, 102);
`;

// const AddButton = styled.button`
//   margin-top: 10px;
//   padding: 5px 10px;
//   font-size: 12px;
//   cursor: pointer;
//   border: none;
//   background-color: rgb(255, 0, 0);
//   color: rgb(255, 255, 255);
//   border-radius: 5px;

//   &:hover {
//     background-color: rgb(200, 0, 0);
//   }
// `;
const BaseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 5px;
`;

// 추가 버튼 스타일
const AddButton = styled(BaseButton)`
  background-color: red;

  &:hover {
    background-color: rgb(150, 0, 0);
  }
`;

// 삭제 버튼 스타일
const RemoveButton = styled(BaseButton)`
  background-color: red;

  &:hover {
    background-color: rgb(150, 0, 0);
  }
`;

const PokemonCard = ({ image, name, number, isRemovable, onAdd, onRemove }) => {
  return (
    <>
      <Card>
        <img src={image} alt="" />
        <Name>{name}</Name>
        <PokeNumber>No. {number}</PokeNumber>
        {isRemovable ? (
          <RemoveButton onClick={onRemove}>삭제</RemoveButton>
        ) : (
          <AddButton onClick={onAdd}>추가</AddButton>
        )}
      </Card>
    </>
  );
};

export default PokemonCard;
