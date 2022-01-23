import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { filterByName } from "store/actions/ProductActions";
import * as S from "./styles";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const products = useSelector((state: AppState) => state.products.data);
  const dispatch = useDispatch();

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue(e.currentTarget.value);
    dispatch(filterByName(e.currentTarget.value));
  };

  return (
    <div>
      <input
        type="text"
        className="searchInput"
        placeholder="Search"
        value={inputValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filter;
