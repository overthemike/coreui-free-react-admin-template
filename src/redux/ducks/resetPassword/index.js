import axios from "axios";
import { useDispatch } from "react-redux";

// action type definitions
const RESET_PASSWORD = "RESET_PASSWORD";

// initial state
const initialState = {
  password: "",
  confPassword: ""
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};
// action creators
function resetPassword(password) {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios({
      method: "post",
      url: "/reset-password/",
      data: {
        password
      },
      headers: { Authorization: "Token " + accessToken }
    })
      .then(resp => {
        dispatch({
          type: RESET_PASSWORD,
          payload: resp.data
        });
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}

export function useResetPassword() {
  const dispatch = useDispatch();
  const newPassword = password => dispatch(resetPassword(password));
  return { newPassword };
}
