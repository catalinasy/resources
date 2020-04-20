import { resourcesReducer } from './resources.reducer';
import * as actions from './resources.actions';
import * as selector from './resources.selector';
import * as sagas from './resources.sagas';

export default {
  reducer: resourcesReducer,
  actions,
  selector,
  sagas,
};
