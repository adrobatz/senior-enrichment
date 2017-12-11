/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';


const rootReducer = combineReducers({
  campuses,
  students
});

export default rootReducer

export * from './campuses'
export * from './students'
