import styled from "styled-components";

export const BasketProductCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 1rem;
  background-color: ${(p) => p.theme.fontColor};
  color: ${(p) => p.theme.body};
  margin-bottom: 1rem;
`;

export const LeftAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  line-height: 2rem;
  height: 2rem;
  width: 5rem;
  background-color: ${(p) => p.theme.body};
  color: ${(p) => p.theme.fontColor};
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IncButton = styled.button`
  height: 2rem;
  width: 2rem;
  font-size: 2rem;
  line-height: 1rem;
  border: none;
  background-color: ${(p) => p.theme.fontColor};
  color: ${(p) => p.theme.body};
`;

export const DecButton = styled.button`
  height: 2rem;
  width: 2rem;
  font-size: 2rem;
  line-height: 0;
  margin-bottom: 1rem;
  border: none;
  background-color: ${(p) => p.theme.fontColor};
  color: ${(p) => p.theme.body};
  padding-bottom: 0.2rem;
`;

export const ProductCount = styled.span`
  font-size: 1.5rem;
`;

export const DeleteButton = styled.button`
  background-color: ${(p) => p.theme.fontColor};
  color: ${(p) => p.theme.body};
  border: none;
`;
