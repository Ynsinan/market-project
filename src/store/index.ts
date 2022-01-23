import { combineReducers } from "redux";
import { ProductState } from "types/productType";
import ProductReducer from "./reducers/ProductReducer";

export interface AppState {
  products: ProductState;
}

const rootReducer = combineReducers({
  products: ProductReducer,
});

export default rootReducer;
