// imports
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// action type definitions
const REQUEST_FLIGHT = "auth/REQUEST_FLIGHT";

// initial state
const initialState = {
  routing: "",
  flex_routing: "",
  departure_city: "",
  destinations: "",
  depart_date: "",
  flex_departure: "",
  return_date: "",
  flex_return: "",
  preferred_class: "",
  passengers: "",
  passenger_names: "",
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
        flex_routing: action.payload.flex_routing,
        departure_city: action.payload.departure_city,
        destinations: action.payload.destinations,
        depart_date: action.payload.depart_date,
        flex_departure: action.payload.flex_departure,
        return_date: action.payload.return_date,
        flex_return: action.payload.flex_return,
        preferred_class: action.payload.preferred_class,
        passengers: action.payload.passengers,
        passenger_names: action.payload.passenger_names,
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
  flex_routing,
  departure_city,
  destinations,
  depart_date,
  flex_departure,
  return_date,
  flex_return,
  preferred_class,
  passengers,
  passenger_names,
  bags,
  notes,
  dispatch
) {
  const accessToken = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
  axios({
    method: "post",
    url: "/customer-requests/flight-request/",
    data: {
      routing,
      flex_routing,
      departure_city,
      destinations,
      depart_date,
      flex_departure,
      return_date,
      flex_return,
      preferred_class,
      passengers,
      passenger_names,
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
          flex_routing,
          departure_city,
          destinations,
          depart_date,
          flex_departure,
          return_date,
          flex_return,
          preferred_class,
          passengers,
          passenger_names,
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
  const routing = useSelector(appState => appState.formState.routing);
  const flex_routing = useSelector(appState => appState.formState.flex_routing);
  const departure_city = useSelector(
    appState => appState.formState.departure_city
  );
  const destinations = useSelector(appState => appState.formState.destinations);
  const depart_date = useSelector(appState => appState.formState.depart_date);
  const flex_departure = useSelector(
    appState => appState.formState.flex_departure
  );
  const return_date = useSelector(appState => appState.formState.return_date);
  const flex_return = useSelector(appState => appState.formState.flex_return);
  const preferred_class = useSelector(
    appState => appState.formState.preferred_class
  );
  const passengers = useSelector(appState => appState.formState.passengers);
  const passenger_names = useSelector(
    appState => appState.formState.passenger_names
  );
  const bags = useSelector(appState => appState.formState.bags);
  const notes = useSelector(appState => appState.formState.notes);

  const requestFlight = (inquiry, wallet_updated, notes) =>
    submitForm(inquiry, wallet_updated, notes, dispatch);

  return {
    routing,
    flex_routing,
    departure_city,
    destinations,
    depart_date,
    flex_departure,
    return_date,
    flex_return,
    preferred_class,
    passengers,
    passenger_names,
    bags,
    notes,
    requestFlight
  };
}
