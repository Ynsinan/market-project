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
}

export interface ProductState {
  data: ProductType[];
  filteredData: ProductType[];
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

export type ProductAction =
  | GET_PRODUCTS_SUCCESS
  | GET_PRODUCTS_ERROR
  | FILTER_BY_NAME;

export type ProductDispatch = ThunkDispatch<ProductState, any, ProductAction>;
