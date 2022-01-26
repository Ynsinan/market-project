import axios from "axios";
import { ProductDispatch, ProductType } from "types/productType";

export const getProductsAll = () => async (dispatch: ProductDispatch) => {
  try {
    const response = await axios.get(
      `https://shopping-data-base.herokuapp.com/items`
    );
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_ERROR" });
  }
};

export const filterByName =
  (inputValue: string) => (dispatch: ProductDispatch) => {
    dispatch({ type: "FILTER_BY_NAME", payload: inputValue });
  };

export const addBasket =
  (product: ProductType) => (dispatch: ProductDispatch) => {
    dispatch({ type: "ADD_BASKET_ITEM", payload: product });
  };

export const addFavorite =
  (product: ProductType) => (dispatch: ProductDispatch) => {
    dispatch({ type: "ADD_FAVORITES_ITEM", payload: product });
  };

export const removeFavorite =
  (product: ProductType) => (dispatch: ProductDispatch) => {
    dispatch({ type: "REMOVE_FAVORITES_ITEM", payload: product });
  };
