import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// action type definitions
const GET_CARDS = "wallet/GET_CARDS";
// initial state
const initialState = {
  cards: []
};
// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
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
          type: GET_CARDS,
          payload: resp.data
        });
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}
export function useWallet() {
  const dispatch = useDispatch();
  const recCards = useSelector(appState => appState.walletState.cards);

  useEffect(() => {
    dispatch(getRecCards());
  }, [dispatch]);
  return { recCards };
}
