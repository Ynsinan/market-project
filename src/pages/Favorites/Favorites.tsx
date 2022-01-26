import { useSelector } from "react-redux";
import { AppState } from "store";
import * as S from "./styles";

const Favorites = () => {
  const favoritesItems = useSelector(
    (state: AppState) => state.products.favorites
  );

  return (
    <div>
      <h1>Favorites</h1>
      {favoritesItems.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default Favorites;
