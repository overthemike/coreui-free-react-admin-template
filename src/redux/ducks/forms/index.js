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
  return new Promise((resolve, reject) => {
    axios
      .post(
        "/customer-requests/card-inquiry/",
        {
          inquiry,
          wallet_updated,
          notes,
          dispatch
        },
        { Authorization: "Token " + window.localStorage.getItem("token") }
      )
      .then(resp => {
        dispatch({
          type: REQUEST_CARD,
          payload: { inquiry, wallet_updated, notes, dispatch }
        });
        resolve();
      })
      .catch(e => {
        reject(e);
      });
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
