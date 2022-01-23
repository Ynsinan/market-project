import * as S from "./styles";
interface NavbarProps {
  theme: string;
  setTheme: (value: string) => void;
}
const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  return (
    <S.Container>
      <S.HeaderTitle>Market</S.HeaderTitle>
      <S.HeaderRight>
        <S.Basket>Basket</S.Basket>
        <S.Favorite>Favoriler</S.Favorite>
        <S.Button onClick={themeToggler}>temayi degis</S.Button>
      </S.HeaderRight>
    </S.Container>
  );
};

export default Navbar;
