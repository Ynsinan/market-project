import styled from "styled-components";

export const BasketProductCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTagArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10px;
`;

export const ProductTag = styled.p`
  margin-right: 0.2rem;
  text-align: center;
  height: 2rem;
  width: 5rem;
  border: 1px solid red;
`;

export const image = styled.img`
  object-fit: cover;
  padding: 1rem;
  width: 250px;
  height: 250px;
`;

export const CenterArea = styled.div`
  width: 50%;
`;

export const RightArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
