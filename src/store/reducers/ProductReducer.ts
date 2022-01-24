import { ProductAction, ProductState } from "types/productType";

const defaultState: ProductState = {
  data: [],
  filteredData: [],
  message: "redux calısıyor",
};

const ProductReducer = (
  state: ProductState = defaultState,
  action: ProductAction
) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
      };
    case "FILTER_BY_NAME":
      if (action.payload === "") {
        return {
          ...state,
          filteredData: state.data,
        };
      } else {
        return {
          ...state,
          filteredData: state.data.filter((product) =>
            product.name.trim().toLowerCase().includes(action.payload)
          ),
        };
      }
    default:
      return state;
  }
};

export default ProductReducer;
