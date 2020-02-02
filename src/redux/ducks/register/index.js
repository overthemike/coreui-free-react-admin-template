// imports
import axios from "axios";
import { useDispatch } from "react-redux";

// action type definitions
const REGISTER = "auth/REGISTER";
const REGISTER_FAILED = "auth/REGISTER_FAILED";

// initial state
const initialState = {
  stripe_token: "",
  email: "",
  first_name: "",
  last_name: "",
  password: ""
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        stripe_token: action.payload.stripe_token,
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        password: action.payload.password
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

// action creators
function submitForm(
  stripe_token,
  email,
  first_name,
  last_name,
  password,
  dispatch
) {
  dispatch({ type: REGISTER });
  return new Promise((resolve, reject) => {
    axios
      .post("/account-registration/", {
        stripe_token,
        email,
        first_name,
        last_name,
        password
      })
      .then(resp => {
        console.log("HEEEY", resp);
        // const token = resp.data.token;
        // const userId = resp.data.user_id;
        // const firstName = resp.data.first_name;
        // const lastName = resp.data.last_name;
        // const is_staff = resp.data.is_staff;
        // window.localStorage.setItem("token", token);
        // window.localStorage.setItem("userId", userId);
        // window.localStorage.setItem("firstName", firstName);
        // window.localStorage.setItem("lastName", lastName);
        // window.localStorage.setItem("is_staff", is_staff);
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // dispatch({
        //   type: LOGIN_SUCCESS,
        //   payload: {
        //     username,
        //     firstName,
        //     lastName,
        //     is_staff
        //   }
        // });
        resolve();
      })
      .catch(e => {
        console.log(
          "ERR",
          e,
          stripe_token,
          email,
          first_name,
          last_name,
          password
        );
        dispatch({
          type: REGISTER_FAILED,
          payload: e.message
        });
        reject(e);
      });
  });
}
// custom hooks
export function useRegister() {
  const dispatch = useDispatch();
  const register = (stripe_token, email, first_name, last_name, password) =>
    submitForm(stripe_token, email, first_name, last_name, password, dispatch);

  return {
    register
  };
}
