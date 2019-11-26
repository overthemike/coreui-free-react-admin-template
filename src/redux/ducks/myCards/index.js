import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// action type definitions
const GET_MY_CARDS = "wallet/GET_MY_CARDS";
const ADD_MY_CARD = "wallet/ADD_MY_CARD";
// initial state
const initialState = {
  cards: []
};
const userId = window.localStorage.getItem("userId");

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case ADD_MY_CARD:
      return {
        ...state,
        type: "",
        date_opened: "",
        status: "",
        user: userId
      };
    default:
      return state;
  }
};
// action creators
function getMyCards() {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios
      .get("card-accounts/?user_id=" + userId)
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
// function addCard(inquiry, wallet_updated, notes, dispatch) {
//   const accessToken = window.localStorage.getItem("token");
//   axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
//   axios({
//     method: "post",
//     url: "/card-accounts/",
//     data: {
//       inquiry,
//       wallet_updated,
//       notes,
//       dispatch
//     },
//     headers: { Authorization: "Token " + accessToken }
//   })
//     .then(response => {
//       return dispatch({
//         type: ADD_MY_CARD,
//         payload: { inquiry, wallet_updated, notes, dispatch }
//       });
//     })
//     .catch(function(error) {
//       console.log("ERROR", error);
//     });
// }
export function useMyCards() {
  const dispatch = useDispatch();
  const MyCards = useSelector(appState => appState.myCardsState.cards);

  useEffect(() => {
    dispatch(getMyCards());
  }, [dispatch]);
  return { MyCards };
}
