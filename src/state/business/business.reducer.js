import { actions } from "./business.actions";

const INITIAL_STATE = {
  isFetching: false,
  business: {},
  error: null,
};

export const businessReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.BUSINESS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actions.BUSINESS_SUCCESS: {
      const business = action.payload[0];
      return {
        ...state,
        isFetching: false,
        business,
      };
    }
    case actions.BUSINESS_FAILURE:
      return {
        ...state,
        isFetching: false,
        business: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
