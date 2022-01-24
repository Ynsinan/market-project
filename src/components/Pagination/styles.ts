import styled from "styled-components";

export const PaginationProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .active {
    color: red;
  }
`;
