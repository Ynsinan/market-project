import styled from "styled-components";

const NavbarButtons = styled.p`
  cursor: pointer;
  color: ${(p) => p.theme.body};
`;

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
  background-color: transparent;
  border: none;
`;

export const HeaderTitle = styled.div`
  cursor: pointer;
  color: ${(p) => p.theme.body};
`;

export const HeaderRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const Basket = styled(NavbarButtons)`
  position: relative;

  span {
    position: absolute;
    font-size: 12px;
    font-weight: bolder;
    border-radius: 50%;
    background: ${(p) => p.theme.body};
    color: ${(p) => p.theme.fontColor};
    padding: 0 5px;
    vertical-align: top;
  }
`;

export const Favorite = styled(NavbarButtons)`
  position: relative;

  span {
    position: absolute;
    font-size: 12px;
    font-weight: bolder;
    border-radius: 50%;
    background: ${(p) => p.theme.body};
    color: ${(p) => p.theme.fontColor};
    padding: 0 5px;
    vertical-align: top;
  }
`;
