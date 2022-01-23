import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme = {
  body: "#FFFFFF",
  fontColor: "#222222",
};
export const darkTheme = {
  body: "#222222",
  fontColor: "#FFFFFF",
  primaryColor: "5800FF",
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body{
    background-color:${(props: any) => props.theme.body};
    transition:background-color 0.5s ease;
  }
`;
