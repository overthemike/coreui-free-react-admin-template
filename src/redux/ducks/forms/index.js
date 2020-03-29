// imports
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// action type definitions
const REQUEST_CARD = "auth/REQUEST_CARD";

// initial state
const initialState = {
  inquiry: "",
  wallet_updated: "",
  notes: ""
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CARD:
      return {
        ...state,
        inquiry: action.payload.inquiry,
        wallet_updated: action.payload.wallet,
        notes: action.payload.notes
      };
    default:
      return state;
  }
};

// action creators
function submitForm(inquiry, wallet_updated, notes, dispatch) {
  const accessToken = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
  axios({
    method: "post",
    url: "/customer-requests/card-inquiry/",
    data: {
      inquiry,
      wallet_updated,
      notes,
      dispatch
    },
    headers: { Authorization: "Token " + accessToken }
  })
    .then(response => {
      return dispatch({
        type: REQUEST_CARD,
        payload: { inquiry, wallet_updated, notes, dispatch }
      });
    })
    .catch(function(error) {
      console.log("ERROR", error);
    });
}
// custom hooks
export function useForms() {
  const dispatch = useDispatch();
  const inquiry = useSelector(appState => appState.formState.inquiry);
  const wallet_updated = useSelector(
    appState => appState.formState.wallet_updated
  );
  const notes = useSelector(appState => appState.formState.notes);
  const requestCard = (inquiry, wallet_updated, notes) =>
    submitForm(inquiry, wallet_updated, notes, dispatch);

  return { inquiry, wallet_updated, notes, requestCard };
}
