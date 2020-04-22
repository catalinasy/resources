export const actions = {
  RESOURCES_FETCH_ALL_REQUEST: "RESOURCES_FETCH_ALL_REQUEST",
  RESOURCES_FETCH_ALL_SUCCESS: "RESOURCES_FETCH_ALL_SUCCESS",
  RESOURCES_FETCH_ALL_FAILURE: "RESOURCES_FETCH_ALL_FAILURE",
};

// Actions
export const fetchAllResources = {
  request: () => ({
    type: actions.RESOURCES_FETCH_ALL_REQUEST,
  }),
  success: (payload) => ({
    type: actions.RESOURCES_FETCH_ALL_SUCCESS,
    payload,
  }),
  failure: (payload) => ({
    type: actions.RESOURCES_FETCH_ALL_FAILURE,
    payload,
  }),
};
