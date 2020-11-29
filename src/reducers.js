import {combineReducers} from 'redux';

import issues from './issues/IssuesReducer';

export default combineReducers({
  issues,
});
