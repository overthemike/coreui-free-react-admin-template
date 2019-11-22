// imports
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

let alreadyAuthed = false
function init() {
  const token = window.localStorage.getItem("token")
  if (token) {
    alreadyAuthed = true
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }
}

init()

// action type definitions
const LOGIN_PENDING = "auth/LOGIN_PENDING"
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
const LOGOUT = "auth/LOGOUT"

// initial state
const initialState = {
  isAuthenticated: alreadyAuthed,
  username: "",
  loading: false,
  error: ""
}

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        username: action.payload
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        username: "",
        error: action.payload
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

// action creators
function login(username, password, dispatch) {
  dispatch({ type: LOGIN_PENDING })
  return new Promise((resolve, reject) => {
    axios
      .post("/api-token-auth/", { username, password })
      .then(resp => {
        const token = resp.data.token
        window.localStorage.setItem("token", token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username
        })
        resolve()
      })
      .catch(e => {
        window.localStorage.removeItem("token")
        dispatch({
          type: LOGIN_FAILURE,
          payload: e.message
        })
        reject(e)
      })
  })
}

function logout() {
  axios.defaults.headers.common["Authorization"] = ""
  window.localStorage.removeItem("token")
  return { type: LOGOUT }
}

// custom hooks
export function useAuth() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    appState => appState.authState.isAuthenticated
  )
  const username = useSelector(appState => appState.authState.username)
  const loading = useSelector(appState => appState.authState.loading)
  const error = useSelector(appState => appState.authState.error)
  const signin = (username, password) => login(username, password, dispatch)
  const signout = () => dispatch(logout())

  return { isAuthenticated, username, loading, error, signin, signout }
}
