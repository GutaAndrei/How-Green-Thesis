import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deviceListReducer,
  deviceDetailsReducer,
} from "./reducers/deviceReducers";
import { dateListReducer, dateDetailsReducer } from "./reducers/dateReducers";
import { activityReducer } from "./reducers/activityReducers";

const reducer = combineReducers({
  deviceList: deviceListReducer,
  deviceDetails: deviceDetailsReducer,
  dateList: dateListReducer,
  dateDetails: dateDetailsReducer,
  activity: activityReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
