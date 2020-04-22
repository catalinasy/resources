import { businessReducer } from "./business.reducer";
import * as actions from "./business.actions";
import * as selector from "./business.selector";
import * as sagas from "./business.sagas";

export default {
  reducer: businessReducer,
  actions,
  selector,
  sagas,
};
