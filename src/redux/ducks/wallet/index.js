import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// action type definitions
const GET_REC_CARDS = "wallet/GET_REC_CARDS";
const GET_MY_CARDS = "wallet/GET_MY_CARDS";
// initial state
const initialState = {
  cards: []
};
// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REC_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case GET_MY_CARDS:
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
          type: GET_REC_CARDS,
          payload: resp.data
        });
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}
function getMyCards() {
  return dispatch => {
    const userId = window.localStorage.getItem("userId");

    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios
      .get("card-accounts/" + userId)
      .then(resp => {
        dispatch({
          type: GET_MY_CARDS,
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
  const MyCards = useSelector(appState => appState.walletState.cards);

  useEffect(() => {
    dispatch(getRecCards());
    dispatch(getMyCards());
  }, [dispatch]);
  return { recCards, MyCards };
}
