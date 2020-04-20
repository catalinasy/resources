import { combineReducers } from 'redux';

// Reducers
import resources from '../resources';
import business from '../business';

const appReducers = combineReducers({
  resources: resources.reducer,
  business: business.reducer,
});

export const rootReducer = (state, action) => {
  // Reset state of the store
  if (action.type === 'RESET_APP') {
    return appReducers({}, action);
  }

  return appReducers(state, action);
};
