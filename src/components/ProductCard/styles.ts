import styled from "styled-components";

export const ProductCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  width: 20%;
  max-height: 100%;
  background-color: ${(p) => p.theme.fontColor};
  color: ${(p) => p.theme.body};
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const ProductTopArea = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const ProductMainArea = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const AddBasketButton = styled.button`
  width: 50%;
  padding: 20px;
  background-color: ${(p) => p.theme.body};
  border: none;
`;

