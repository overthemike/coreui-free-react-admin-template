// imports
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// action type definitions
const REQUEST_FLIGHT = "auth/REQUEST_FLIGHT";

// initial state
const initialState = {
  routing: "",
  flexRouting: "",
  departCity: "",
  destinations: "",
  departDate: "",
  flexDepartDate: "",
  returnDate: "",
  flexReturnDate: "",
  preferred: "",
  passengers: "",
  passNames: "",
  bags: "",
  notes: ""
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FLIGHT:
      return {
        ...state,
        routing: action.payload.routing,
        flexRouting: action.payload.flexRouting,
        departCity: action.payload.departCity,
        destinations: action.payload.destinations,
        departDate: action.payload.departDate,
        flexDepartDate: action.payload.flexDepartDate,
        returnDate: action.payload.returnDate,
        flexReturnDate: action.payload.flexReturnDate,
        preferred: action.payload.preferred,
        passengers: action.payload.passengers,
        passNames: action.payload.passNames,
        bags: action.payload.bags,
        notes: action.payload.notes
      };
    default:
      return state;
  }
};

// action creators
function submitForm(
  routing,
  flexRouting,
  departCity,
  destinations,
  departDate,
  flexDepartDate,
  returnDate,
  flexReturnDate,
  preferred,
  passengers,
  passNames,
  bags,
  notes,
  dispatch
) {
  const accessToken = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
  axios({
    method: "post",
    url: "/customer-requests/flight/",
    data: {
      routing,
      flexRouting,
      departCity,
      destinations,
      departDate,
      flexDepartDate,
      returnDate,
      flexReturnDate,
      preferred,
      passengers,
      passNames,
      bags,
      notes
    },
    headers: { Authorization: "Token " + accessToken }
  })
    .then(response => {
      return dispatch({
        type: REQUEST_FLIGHT,
        payload: {
          routing,
          flexRouting,
          departCity,
          destinations,
          departDate,
          flexDepartDate,
          returnDate,
          flexReturnDate,
          preferred,
          passengers,
          passNames,
          bags,
          notes,
          dispatch
        }
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
