import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme = {
  body: "#F2E1C1",
  fontColor: "#716F81",
};
export const darkTheme = {
  body: "#716F81",
  fontColor: "#F2E1C1",
  primaryColor: "5800FF",
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body{
    background-color:${(props: any) => props.theme.body};
    transition:background-color 0.5s ease;
  }
`;
