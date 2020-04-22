import { actions } from "./resources.actions";

const INITIAL_STATE = {
  isFetching: false,
  resources: [],
  error: null,
};

export const resourcesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.RESOURCES_FETCH_ALL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actions.RESOURCES_FETCH_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        resources: action.payload,
      };
    case actions.RESOURCES_FETCH_ALL_FAILURE:
      return {
        ...state,
        isFetching: false,
        resources: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
