import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가

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
const DeleteButton = styled(BaseButton)`
  background-color: red;

  &:hover {
    background-color: rgb(150, 0, 0);
  }
`;

const PokemonCard = ({ image, name, number, isRemovable, onAdd, onRemove }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleCardClick = () => {
    navigate(`/pokemon/${number}`); // 클릭 시 상세 페이지로 이동
  };

  const handleAddClick = (e) => {
    e.stopPropagation(); // 상위 Card의 클릭 이벤트 중지
    onAdd(); // 추가 로직 실행
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation(); // 상위 Card의 클릭 이벤트 중지
    onRemove(); // 삭제 로직 실행
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <img src={image} alt="" />
        <Name>{name}</Name>
        <PokeNumber>No. {number}</PokeNumber>
        {isRemovable ? (
          <DeleteButton onClick={handleRemoveClick}>삭제</DeleteButton>
        ) : (
          <AddButton onClick={handleAddClick}>추가</AddButton>
        )}
      </Card>
    </>
  );
};

export default PokemonCard;
