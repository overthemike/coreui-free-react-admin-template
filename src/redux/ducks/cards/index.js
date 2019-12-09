import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// action type definitions
const GET_ADMIN_CARDS = "wallet/GET_ADMIN_CARDS";

// initial state
const initialState = {
  cards: []
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    default:
      return state;
  }
};
// action creators
function getRecCards() {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios
      .get("/cards/")
      .then(resp => {
        dispatch({
          type: GET_ADMIN_CARDS,
          payload: resp.data
        });
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}

export function useAdminCards() {
  const dispatch = useDispatch();
  const adminCards = useSelector(appState => appState.myAdminCardsState.cards);

  useEffect(() => {
    dispatch(getRecCards());
  }, [dispatch]);
  return { adminCards };
}
