import service from './IssuesService';

export const CLEAR = 'LIST_ISSUES/CLEAR';
export const GET_REQUEST = 'LIST_ISSUES/GET_REQUEST';
export const GET_SUCCESS = 'LIST_ISSUES/GET_SUCCESS';
export const GET_FAILURE = 'LIST_ISSUES/GET_FAILURE';

export const listIssues = (username, repository, filters) => async dispatch => {
  dispatch({type: GET_REQUEST});

  try {
    const response = await service.listIssues(username, repository, filters);

    dispatch({type: GET_SUCCESS, issues: response.data});
  } catch (e) {
    dispatch({type: GET_FAILURE, errors: e.data.errors});
  }
};

export const clear = () => dispatch => dispatch({type: CLEAR});
