import { Filter, Pagination } from "components";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getProductsAll } from "store/actions/ProductActions";

import * as S from "./styles";

const Home = ({ theme }: any) => {
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAll());
  }, [dispatch]);

  return (
    <S.Home>
      <S.FilterArea>
        <Filter />
      </S.FilterArea>
      <S.ProductsArea>
        <Pagination theme={theme} />
      </S.ProductsArea>
    </S.Home>
  );
};

export default Home;
