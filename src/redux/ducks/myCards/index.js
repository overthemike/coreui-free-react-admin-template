import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// action type definitions
const GET_MY_CARDS = "wallet/GET_MY_CARDS";
const ADD_MY_CARD = "wallet/ADD_MY_CARD";

const userId = window.localStorage.getItem("userId");

// initial state
const initialState = {
  cards: [
    {
      type: "",
      date_opened: "",
      status: "",
      user: {
        id: userId,
        accountprofile: {
          member_524: [],
          companion_524: [],
          companion_first_name: ""
        }
      },
      card: ""
    }
  ]
};

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
        card: "",
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
function addCard(type, date_opened, status, user, card, dispatch) {
  const accessToken = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
  axios({
    method: "post",
    url: "/card-accounts/",
    data: {
      type: type,
      date_opened: date_opened,
      status: status,
      user: userId,
      card: card
    },
    headers: { Authorization: "Token " + accessToken }
  })
    .then(response => {
      return dispatch({
        type: ADD_MY_CARD,
        payload: { type, date_opened, status, user, card }
      });
    })
    .catch(function(error) {
      console.log("ERROR", error);
    });
}

export function useMyCards() {
  const dispatch = useDispatch();
  const MyCards = useSelector(appState => appState.myCardsState.cards);
  const newCard = (type, date_opened, card, status, user) =>
    addCard(type, date_opened, status, user, card, dispatch);

  useEffect(() => {
    dispatch(getMyCards());
  }, [dispatch]);
  return { MyCards, newCard };
}
