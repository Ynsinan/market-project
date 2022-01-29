import { useDispatch, useSelector } from "react-redux";
import {
  addBasket,
  addFavorite,
  removeFavorite,
} from "store/actions/ProductActions";
import { ProductType } from "types/productType";
import { FcLike, FcDislike } from "react-icons/fc";
import * as S from "./styles";
import { AppState } from "store";

type props = {
  product: ProductType;
};

const ProductCard = ({ product }: props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: AppState) => state.products.favorites);
  const handleClickBasket = () => {
    dispatch(addBasket(product));
  };

  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <S.ProductCardContainer>
      {product?.isFavorite === undefined || product?.isFavorite === false ? (
        <S.FavoriteButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(addFavorite(product));
          }}
        >
          <FcLike size={30} />
        </S.FavoriteButton>
      ) : (
        <S.FavoriteButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeFavorite(product));
          }}
        >
          <FcDislike size={30} />
        </S.FavoriteButton>
      )}

      <S.ProductTopArea>
        <S.Image
          src="ProductImage.jpg"
          loading="lazy"
          alt="…"
          width="100%"
          height="100%"
        />
      </S.ProductTopArea>
      <S.ProductMainArea>
        <p>{product.name}</p>
        <p>{product.price}₺</p>
        <S.ButtonWrapper>
          <S.AddBasketButton onClick={handleClickBasket}>
            Add Basket
          </S.AddBasketButton>
        </S.ButtonWrapper>
      </S.ProductMainArea>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
