import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  padding: 1rem;
  color: ${(p) => p.theme.fontColor};
`;

export const ProductsArea = styled.div`
  width: 80%;
`;

export const FilterArea = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  padding-top: 1rem;
  background-color: ${(p) => p.theme.fontColor};
  border-radius: 2rem;
  height: 100vh;
  position: sticky;
  top: 0;
`;
