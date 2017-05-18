import { combineReducers } from 'redux';
import menu from './menu';
import list from './list';

const rootReducer = combineReducers({
  menu,
  list
});

export default rootReducer;