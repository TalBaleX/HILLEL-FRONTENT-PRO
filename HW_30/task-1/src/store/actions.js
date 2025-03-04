import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchData = (url) => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
  }
};

export { fetchData };
