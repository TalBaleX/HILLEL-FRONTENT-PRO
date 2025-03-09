import axios from "axios";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "./reducer";

export const fetchData = (url) => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });
    dispatch(fetchDataSuccess(response.data));
    console.log("Response Data:", response.data);
  } catch (error) {
    if (!error.response) {
      dispatch(
        fetchDataFailure(
          "Network error: Please check your internet connection."
        )
      );
    } else {
      dispatch(fetchDataFailure(error.message));
    }
  }
};
