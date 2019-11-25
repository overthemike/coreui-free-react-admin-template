// imports
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// action type definitions
const GET_CARDS = "wallet/GET_CARDS";

// initial state
const initialState = {
  inquiry: "",
  wallet_updated: "",
  notes: ""
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

// action creators
function getCards() {
  const accessToken = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
  axios({
    method: "get",
    url: "/cards/",
    headers: { Authorization: "Token " + accessToken }
  })
    .then(response => {
      console.log("I AM HERE", response);
    })
    .catch(function(error) {
      console.log("ERROR", error);
    });
}
// custom hooks
export function useWallet() {
  const dispatch = useDispatch();
  const inquiry = useSelector(appState => appState.formState.inquiry);
  const wallet_updated = useSelector(
    appState => appState.formState.wallet_updated
  );
  const notes = useSelector(appState => appState.formState.notes);
  const fetchCards = () => getCards(dispatch);

  return { inquiry, wallet_updated, notes, fetchCards };
}
