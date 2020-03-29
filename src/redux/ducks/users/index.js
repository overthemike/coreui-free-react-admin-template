import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// action type definitions
const GET_USERS = "wallet/GET_USERS";
const ADD_USERS = "wallet/ADD_USERS";

// initial state
const initialState = {
  users: [
    {
      id: "",
      email: "",
      first_name: "",
      last_name: "",
      accountprofile: { joined: "", member_524: [] }
    }
  ]
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USERS:
      return { ...state, id: "", email: "", first_name: "", last_name: "" };
    default:
      return state;
  }
};
// action creators
function getUsers() {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios
      .get("accounts/")
      .then(resp => {
        dispatch({
          type: GET_USERS,
          payload: resp.data
        });
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}
// function addCard(type, date_opened, status, user, card, dispatch) {
//   const accessToken = window.localStorage.getItem("token");
//   axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
//   axios({
//     method: "post",
//     url: "/card-accounts/",
//     data: {
//       name: name,
//       date_opened: date_opened,
//       status: status,
//       user: userId,
//       card: card
//     },
//     headers: { Authorization: "Token " + accessToken }
//   })
//     .then(response => {
//       console.log("response", response);
//       return dispatch({
//         type: ADD_USERS,
//         payload: { type, date_opened, status, user, card }
//       });
//     })
//     .catch(function(error) {
//       console.log("ERROR", error);
//     });
// }

export function useUsers() {
  const dispatch = useDispatch();
  const users = useSelector(appState => appState.userState.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return { users };
}
