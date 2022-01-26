import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { decrease, increment } from "store/actions/ProductActions";
import { ProductType } from "types/productType";
import * as S from "./styles";

type props = {
  item: ProductType;
};
const BasketProductCard = ({ item }: props) => {
  const dispatch = useDispatch();

  return (
    <S.BasketProductCardWrapper>
      <S.LeftArea>
        <S.image src="ProductImage.jpg" alt="" />
        {/* {item.tags ? (
          <S.ProductTagArea>
            {item.tags.map((tag, key) => {
              return <S.ProductTag key={key}>{tag}</S.ProductTag>;
            })}
          </S.ProductTagArea>
        ) : null} */}
      </S.LeftArea>
      <S.CenterArea>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>
          <b>manufacturer :</b> {item.manufacturer}
        </p>
        <p>
          <b>{item.price}</b>
        </p>
      </S.CenterArea>
      <S.RightArea>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(increment(item));
          }}
        >
          +
        </button>
        <span>{item.count}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(decrease(item));
          }}
        >
          -
        </button>
      </S.RightArea>
    </S.BasketProductCardWrapper>
  );
};

export default BasketProductCard;
