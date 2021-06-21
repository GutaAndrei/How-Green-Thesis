import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deviceListReducer,
  deviceDetailsReducer,
} from "./reducers/deviceReducers";
import { dateListReducer, dateDetailsReducer } from "./reducers/dateReducers";
import { activityReducer } from "./reducers/activityReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userUpdateIdReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import { userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  deviceList: deviceListReducer,
  deviceDetails: deviceDetailsReducer,
  dateList: dateListReducer,
  dateDetails: dateDetailsReducer,
  activity: activityReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdateId: userUpdateIdReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
