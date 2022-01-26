import { useDispatch } from "react-redux";
import {
  decrease,
  increment,
  removeBasketItem,
} from "store/actions/ProductActions";
import { ProductType } from "types/productType";
import { BsFillTrashFill } from "react-icons/bs";
import * as S from "./styles";

type props = {
  item: ProductType;
};
const BasketProductCard = ({ item }: props) => {
  const dispatch = useDispatch();

  return (
    <S.BasketProductCardWrapper>
      <S.LeftAreaWrapper>
        <S.LeftArea>
          <S.image src="ProductImage.jpg" alt="" />
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
          {item.tags ? (
            <S.ProductTagArea>
              {item.tags.map((tag, key) => {
                return <S.ProductTag key={key}>{tag}</S.ProductTag>;
              })}
            </S.ProductTagArea>
          ) : null}
        </S.CenterArea>
      </S.LeftAreaWrapper>
      <S.RightArea>
        <S.IncButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(increment(item));
          }}
        >
          +
        </S.IncButton>
        <S.ProductCount>{item.count}</S.ProductCount>
        <S.DecButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(decrease(item));
          }}
        >
          -
        </S.DecButton>
        <S.DeleteButton
          onClick={() => {
            dispatch(removeBasketItem(item));
          }}
        >
          <BsFillTrashFill size={20} />
        </S.DeleteButton>
      </S.RightArea>
    </S.BasketProductCardWrapper>
  );
};

export default BasketProductCard;
