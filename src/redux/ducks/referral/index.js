import axios from "axios";
import { useDispatch } from "react-redux";

// action type definitions
const ADD_REFERRAL = "wallet/ADD_REFERRAL";

// initial state
const initialState = {
  referral: []
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REFERRAL:
      return {
        ...state,
        referral: action.payload
      };
    default:
      return state;
  }
};
// action creators
function addReferral(name, email, phone, notes) {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios({
      method: "post",
      url: "/customer-requests/referral/",
      data: {
        name,
        email,
        phone,
        notes
      },
      headers: { Authorization: "Token " + accessToken }
    })
      .then(resp => {
        dispatch({
          type: ADD_REFERRAL,
          payload: resp.data
        });
        window.location.reload();
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}

export function useReferral() {
  const dispatch = useDispatch();
  const newReferral = (name, email, phone, notes) =>
    dispatch(addReferral(name, email, phone, notes));
  return { newReferral };
}
