import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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
function getRecCards(fName, lName, email, notes) {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios({
      method: "post",
      url: "/customer-requests/hotel-request/",
      data: {
        fName,
        lName,
        email,
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
  const recCards = useSelector(appState => appState.recCardState.referral);

  useEffect(() => {
    dispatch(getRecCards());
  }, [dispatch]);
  return { recCards };
}
