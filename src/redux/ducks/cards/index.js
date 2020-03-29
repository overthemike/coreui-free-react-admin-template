import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// action type definitions
const GET_ADMIN_CARDS = "wallet/GET_ADMIN_CARDS";
const EDIT_ADMIN_CARDS = "wallet/EDIT_ADMIN_CARDS";
const DELETE_ADMIN_CARDS = "wallet/DELETE_ADMIN_CARDS";

// initial state
const initialState = {
  cards: []
};

// reducer (MUST BE DEFAULT EXPORT)
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case EDIT_ADMIN_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case DELETE_ADMIN_CARDS:
      return {
        ...state
      };
    default:
      return state;
  }
};
// action creators
function getRecCards() {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios
      .get("/cards/")
      .then(resp => {
        dispatch({
          type: GET_ADMIN_CARDS,
          payload: resp.data
        });
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}
function editAdminCards(
  id,
  name,
  use_for,
  annual_fee,
  annual_notes,
  app_link,
  approval_524,
  bonus_deadline,
  counts_524,
  features,
  first_year_free,
  free_intl,
  image,
  recon_line,
  rewards,
  type
) {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios({
      method: "put",
      url: "/cards/" + id,
      data: {
        id,
        name,
        use_for,
        annual_fee,
        annual_notes,
        app_link,
        approval_524,
        bonus_deadline,
        counts_524,
        features,
        first_year_free,
        free_intl,
        image,
        recon_line,
        rewards,
        type
      },
      headers: { Authorization: "Token " + accessToken }
    })
      .then(resp => {
        dispatch({
          type: EDIT_ADMIN_CARDS,
          payload: resp.data
        });
        window.location.reload();
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}
function deleteAdminCards(id) {
  return dispatch => {
    const accessToken = window.localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "Token " + accessToken;
    axios
      .delete("/cards/" + id)
      .then(resp => {
        dispatch({
          type: DELETE_ADMIN_CARDS
        });
        window.location.reload();
      })
      .catch(e => {
        console.error("ERROR", e);
      });
  };
}

export function useAdminCards() {
  const dispatch = useDispatch();
  const adminCards = useSelector(appState => appState.myAdminCardsState.cards);
  const deleteCards = id => dispatch(deleteAdminCards(id));
  const editCards = (
    id,
    name,
    use_for,
    annual_fee,
    annual_notes,
    app_link,
    approval_524,
    bonus_deadline,
    counts_524,
    features,
    first_year_free,
    free_intl,
    image,
    recon_line,
    rewards,
    type
  ) =>
    dispatch(
      editAdminCards(
        id,
        name,
        use_for,
        annual_fee,
        annual_notes,
        app_link,
        approval_524,
        bonus_deadline,
        counts_524,
        features,
        first_year_free,
        free_intl,
        image,
        recon_line,
        rewards,
        type
      )
    );

  useEffect(() => {
    dispatch(getRecCards());
  }, [dispatch]);
  return { adminCards, deleteCards, editCards };
}
