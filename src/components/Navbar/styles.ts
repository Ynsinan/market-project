import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 5rem;
  background-color: ${(p) => p.theme.fontColor};
  color: ${(p) => p.theme.body};
  padding: 2rem;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const HeaderTitle = styled.div``;

export const HeaderRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const Basket = styled.p`
  cursor: pointer;
`;

export const Favorite = styled.p`
  cursor: pointer;
`;
