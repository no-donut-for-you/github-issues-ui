import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  CLEAR
} from './IssuesActions';

const initialState = {
  errors: [],
  loading: false
};

export default (state = initialState, action) => {
  const {type, issues} = action;

  switch (type) {
    case GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_SUCCESS:
      return {
        ...state,
        issues,
        success: true,
        loading: false
      };
    case GET_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        errors: action.errors
      };

    case CLEAR:
      return {...state, ...initialState};
    default:
      return state;
  }
};
