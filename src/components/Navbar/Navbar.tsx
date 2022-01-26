import { Link } from "react-router-dom";
import * as S from "./styles";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { AppState } from "store";
interface NavbarProps {
  theme: string;
  setTheme: (value: string) => void;
}
const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const { basket, favorites } = useSelector(
    (state: AppState) => state.products
  );

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
          <S.Basket>
            Basket {basket.length >= 1 && <span>{basket.length}</span>}
          </S.Basket>
        </Link>
        <Link to="/favorites">
          <S.Favorite>
            Favoriler{favorites.length >= 1 && <span>{favorites.length}</span>}
          </S.Favorite>
        </Link>

        <S.Button onClick={themeToggler}>
          {theme === "light" ? (
            <BsSunFill size={20} className="sun" />
          ) : (
            <BsMoonStarsFill size={20} />
          )}
        </S.Button>
      </S.HeaderRight>
    </S.Container>
  );
};

export default Navbar;
