// imports
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// action type definitions
const REQUEST_HOTEL = "auth/REQUEST_HOTEL";

// initial state
const initialState = {
  hotel: "",
  hotelLocation: "",
  partner: "",
  roomNums: "",
  guestPerRoom: "",
  guestNames: "",
  checkin: "",
  checkout: "",
  budget: "",
  specialOccation: "",
  roomDetails: "",
  specialRequests: ""
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HOTEL:
      return {
        ...state,
        hotel: action.payload.hotel,
        hotelLocation: action.payload.hotelLocation,
        partner: action.payload.partner,
        roomNums: action.payload.roomNums,
        guestPerRoom: action.payload.guestPerRoom,
        guestNames: action.payload.guestNames,
        checkin: action.payload.checkin,
        checkout: action.payload.checkout,
        budget: action.payload.budget,
        specialOccation: action.payload.specialOccation,
        roomDetails: action.payload.roomDetails,
        specialRequests: action.payload.specialRequests
      };
    default:
      return state;
  }
};

// action creators
function submitForm(
  hotel,
  hotelLocation,
  partner,
  roomNums,
  guestPerRoom,
  guestNames,
  checkin,
  checkout,
  budget,
  specialOccation,
  roomDetails,
  specialRequests,
  dispatch
) {
  const accessToken = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
  axios({
    method: "post",
    url: "/customer-requests/flight/",
    data: {
      hotel,
      hotelLocation,
      partner,
      roomNums,
      guestPerRoom,
      guestNames,
      checkin,
      checkout,
      budget,
      specialOccation,
      roomDetails,
      specialRequests
    },
    headers: { Authorization: "Token " + accessToken }
  })
    .then(response => {
      return dispatch({
        type: REQUEST_HOTEL,
        payload: {
          hotel,
          hotelLocation,
          partner,
          roomNums,
          guestPerRoom,
          guestNames,
          checkin,
          checkout,
          budget,
          specialOccation,
          roomDetails,
          specialRequests,
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
