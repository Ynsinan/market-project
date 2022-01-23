import { ProductType } from "types/productType";
import * as S from "./styles";
type props = {
  product: ProductType;
};
const ProductCard = ({ product }: props) => {
  return (
    <S.ProductCardContainer>
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
        <p>{product.price}</p>
      </S.ProductMainArea>
      {product.tags ? (
        <S.ProductTagArea>
          {product.tags.map((tag, key) => {
            return <S.ProductTag key={key}>{tag}</S.ProductTag>;
          })}
        </S.ProductTagArea>
      ) : null}
    </S.ProductCardContainer>
  );
};

export default ProductCard;
