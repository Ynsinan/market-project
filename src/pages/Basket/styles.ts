import styled from "styled-components";

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

export const ProductsList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const TotalPrice = styled.div`
  display: flex;
  width: 20%;
  background-color: ${(p) => p.theme.fontColor};
  color: ${(p) => p.theme.body};
  height: 30vh;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  font-size: 3rem;
`;
