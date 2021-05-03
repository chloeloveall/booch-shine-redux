import formVisibleReducer from './form-visible-reducer';
import boochListReducer from './booch-list-reducer';
import selectedBoochReducer from './selected-booch-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainBoochList: boochListReducer,
  selectedBooch: selectedBoochReducer
});

export default rootReducer;