import { Link } from "react-router-dom";
import * as S from "./styles";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { setTimeout } from "timers/promises";
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
      <Link to="/">
        <S.HeaderTitle>Market</S.HeaderTitle>
      </Link>

      <S.HeaderRight>
        <Link to="/basket">
          <S.Basket>Basket</S.Basket>
        </Link>
        <Link to="/favorites">
          <S.Favorite>Favoriler</S.Favorite>
        </Link>

        <S.Button onClick={themeToggler}>
          {theme === "light" ? (
            <BsSunFill size={20} className="sun"/>
          ) : (
            <BsMoonStarsFill size={20} />
          )}
        </S.Button>
      </S.HeaderRight>
    </S.Container>
  );
};

export default Navbar;
