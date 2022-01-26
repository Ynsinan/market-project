import { ProductAction, ProductState } from "types/productType";

const defaultState: ProductState = {
  data: [],
  filteredData: [],
  basket: [],
  favorites: [],
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
    case "ADD_BASKET_ITEM":
      return {
        ...state,
        basket: state.basket.find(
          (basketItem) => basketItem.added === action.payload.added
        )
          ? state.basket.map((basketItem) =>
              basketItem.added === action.payload.added
                ? { ...basketItem, count: basketItem.count + 1 }
                : basketItem
            )
          : [...state.basket, { ...action.payload, count: 1 }],
      };
    case "ADD_FAVORITES_ITEM":
      return {
        ...state,
        filteredData: state.filteredData.map((product) =>
          product.added === action.payload.added
            ? { ...product, isFavorite: true }
            : product
        ),
        favorites: state.favorites.find(
          (product) => product.added === action.payload.added
        )
          ? state.favorites
          : [...state.favorites, { ...action.payload, isFavorite: true }],
      };
    case "REMOVE_FAVORITES_ITEM":
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.added !== action.payload.added
        ),
        filteredData: state.filteredData.map((product) =>
          product.added === action.payload.added
            ? { ...product, isFavorite: false }
            : product
        ),
      };
    case "INCREMENT":
      return {
        ...state,
        basket:
          state.basket.find(
            (basketItem) => basketItem.added === action.payload.added
          ) &&
          state.basket.map((basketItem) =>
            basketItem.added === action.payload.added
              ? { ...basketItem, count: basketItem.count + 1 }
              : basketItem
          ),
      };
    case "DECREASE":
      if (action.payload.count < 1) {
        return {
          ...state,
          basket: state.basket.filter(
            (basketItem) => basketItem.added !== action.payload.added
          ),
        };
      } else {
        return {
          ...state,
          basket:
            state.basket.find(
              (basketItem) => basketItem.added === action.payload.added
            ) &&
            state.basket.map((basketItem) =>
              basketItem.added === action.payload.added
                ? { ...basketItem, count: basketItem.count - 1 }
                : basketItem
            ),
        };
      }
    case "REMOVE_BASKET_ITEM":
      return {
        ...state,
        basket: state.basket.filter(
          (basketItem) => basketItem.added !== action.payload.added
        ),
      };

    default:
      return state;
  }
};

export default ProductReducer;
