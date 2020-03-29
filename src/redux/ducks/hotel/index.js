// imports
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// action type definitions
const REQUEST_HOTEL = "auth/REQUEST_HOTEL";

// initial state
const initialState = {
  hotel: "",
  hotel_location: "",
  partner: "",
  rooms: "",
  guest_per_room: "",
  guest_names: "",
  checkin: "",
  checkout: "",
  budget_per_night: "",
  special_occasion: "",
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
        hotel_location: action.payload.hotel_location,
        partner: action.payload.partner,
        rooms: action.payload.rooms,
        guest_per_room: action.payload.guest_per_room,
        guest_names: action.payload.guest_names,
        checkin: action.payload.checkin,
        checkout: action.payload.checkout,
        budget_per_night: action.payload.budget_per_night,
        special_occasion: action.payload.special_occasion,
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
  hotel_location,
  partner,
  rooms,
  guest_per_room,
  guest_names,
  checkin,
  checkout,
  budget_per_night,
  special_occasion,
  roomDetails,
  specialRequests,
  dispatch
) {
  const accessToken = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
  axios({
    method: "post",
    url: "/customer-requests/hotel-request/",
    data: {
      hotel,
      hotel_location,
      partner,
      rooms,
      guest_per_room,
      guest_names,
      checkin,
      checkout,
      budget_per_night,
      special_occasion,
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
          hotel_location,
          partner,
          rooms,
          guest_per_room,
          guest_names,
          checkin,
          checkout,
          budget_per_night,
          special_occasion,
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
export function useHotel() {
  const dispatch = useDispatch();
  const hotel = useSelector(appState => appState.formState.hotel);
  const hotel_location = useSelector(
    appState => appState.formState.hotel_location
  );
  const partner = useSelector(appState => appState.formState.partner);
  const rooms = useSelector(appState => appState.formState.rooms);
  const guest_per_room = useSelector(
    appState => appState.formState.guest_per_room
  );
  const guest_names = useSelector(appState => appState.formState.guest_names);
  const checkin = useSelector(appState => appState.formState.checkin);
  const checkout = useSelector(appState => appState.formState.checkout);
  const budget_per_night = useSelector(
    appState => appState.formState.budget_per_night
  );
  const special_occasion = useSelector(
    appState => appState.formState.special_occasion
  );
  const roomDetails = useSelector(appState => appState.formState.roomDetails);
  const specialRequests = useSelector(
    appState => appState.formState.specialRequests
  );

  const requestHotel = (
    hotel,
    hotel_location,
    partner,
    rooms,
    guest_per_room,
    guest_names,
    checkin,
    checkout,
    budget_per_night,
    special_occasion,
    roomDetails,
    specialRequests
  ) =>
    submitForm(
      hotel,
      hotel_location,
      partner,
      rooms,
      guest_per_room,
      guest_names,
      checkin,
      checkout,
      budget_per_night,
      special_occasion,
      roomDetails,
      specialRequests,
      dispatch
    );

  return {
    hotel,
    hotel_location,
    partner,
    rooms,
    guest_per_room,
    guest_names,
    checkin,
    checkout,
    budget_per_night,
    special_occasion,
    roomDetails,
    specialRequests,
    requestHotel
  };
}
