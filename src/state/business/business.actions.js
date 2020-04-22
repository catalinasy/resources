export const actions = {
  BUSINESS_REQUEST: "BUSINESS_REQUEST",
  BUSINESS_SUCCESS: "BUSINESS_SUCCESS",
  BUSINESS_FAILURE: "BUSINESS_FAILURE",
};

// Actions
export const fetchBusiness = {
  request: () => ({
    type: actions.BUSINESS_REQUEST,
  }),
  success: (payload) => ({
    type: actions.BUSINESS_SUCCESS,
    payload,
  }),
  failure: (payload) => ({
    type: actions.BUSINESS_FAILURE,
    payload,
  }),
};
