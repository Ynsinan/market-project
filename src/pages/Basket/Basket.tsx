import { BasketProductCard } from "components";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";

import * as S from "./styles";

const Basket = () => {
  const basketItems = useSelector((state: AppState) => state.products.basket);

  const total = basketItems
    .reduce((acc: any, item: any) => acc + item.count * item.price, 0)
    .toFixed(2);
  console.log(total);

  return (
    <S.BasketWrapper>
      <S.ProductsList>
        {basketItems.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <BasketProductCard item={item} />
            </React.Fragment>
          );
        })}
      </S.ProductsList>
      <S.TotalPrice>{total}₺</S.TotalPrice>
    </S.BasketWrapper>
  );
};

export default Basket;
