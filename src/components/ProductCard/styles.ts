import styled from "styled-components";

export const ProductCardContainer = styled.div`
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
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const FavoriteButton = styled.button`
  width: 50%;
  padding: 20px;
`;

export const AddBasketButton = styled.button`
  width: 50%;
  padding: 20px;
`;

export const ProductTagArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const ProductTag = styled.p`
  margin-right: 0.2rem;
  border: 1px solid red;
`;
