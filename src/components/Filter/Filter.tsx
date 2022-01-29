import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { filterByName, sortPriceProduct } from "store/actions/ProductActions";
import * as S from "./styles";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [sortPrice, setSortPrice] = useState("less to more");
  const dispatch = useDispatch();

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue(e.currentTarget.value);
    dispatch(filterByName(e.currentTarget.value));
  };

  const handleRadio = (e: any) => {
    setSortPrice(e.target.value);
    dispatch(sortPriceProduct(e.target.value));
  };

  useEffect(() => {
    console.log(sortPrice);
  }, [sortPrice]);
  return (
    <div>
      <S.Input
        type="text"
        className="searchInput"
        placeholder="Search"
        value={inputValue}
        onChange={handleSearch}
      />
      <div className="filterElement">
        <input
          type="radio"
          name="less to more"
          value="less to more"
          checked={sortPrice === "less to more"}
          onChange={handleRadio}
        />
        <label htmlFor="less to more">Less to more</label>
      </div>
      <div className="filterElement">
        <input
          type="radio"
          name="more to less"
          value="more to less"
          onChange={handleRadio}
          checked={sortPrice === "more to less"}
        />
        <label htmlFor="more to less">More to less</label>
      </div>
    </div>
  );
};

export default Filter;
