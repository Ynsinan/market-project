import { useState } from "react";
import { useDispatch } from "react-redux";

import { filterByName } from "store/actions/ProductActions";
import * as S from "./styles";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue(e.currentTarget.value);
    dispatch(filterByName(e.currentTarget.value));
  };

  return (
    <div>
      <S.Input
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
