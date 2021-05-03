import formVisibleReducer from './form-visible-reducer';
import boochListReducer from './booch-list-reducer';
import selectedBoochReducer from './selected-booch-reducer';
import { combineReducers } from 'redux';
import editingBoochReducer from './editing-booch-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainBoochList: boochListReducer,
  selectedBooch: selectedBoochReducer,
  editing: editingBoochReducer
});

export default rootReducer;