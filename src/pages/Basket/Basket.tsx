import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { addBasket } from "store/actions/ProductActions";
import * as S from "./styles";

const Basket = () => {
  const basketItems = useSelector((state: AppState) => state.products.basket);

  return (
    <div>
      <h1>basket</h1>
      {basketItems.map((item) => {
        return <p>22{item.name}</p>;
      })}
    </div>
  );
};

export default Basket;
