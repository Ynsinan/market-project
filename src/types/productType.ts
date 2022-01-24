import { ThunkDispatch } from "redux-thunk";

export interface ProductType {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
  count?: any;
}

export interface ProductState {
  data: ProductType[];
  filteredData: ProductType[];
  basket: ProductType[];
  message: string;
}

interface GET_PRODUCTS_SUCCESS {
  type: "GET_PRODUCTS_SUCCESS";
  payload: ProductType[];
}
interface GET_PRODUCTS_ERROR {
  type: "GET_PRODUCTS_ERROR";
}

interface FILTER_BY_NAME {
  type: "FILTER_BY_NAME";
  payload: string;
}

interface ADD_BASKET_ITEM {
  type: "ADD_BASKET_ITEM";
  payload: ProductType;
}

export type ProductAction =
  | GET_PRODUCTS_SUCCESS
  | GET_PRODUCTS_ERROR
  | FILTER_BY_NAME
  | ADD_BASKET_ITEM;

export type ProductDispatch = ThunkDispatch<ProductState, any, ProductAction>;
