import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deviceListReducer,
  deviceDetailsReducer,
  deviceDeleteReducer,
  deviceAddReducer,
} from "./reducers/deviceReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userUpdateIdReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import { userRegisterReducer } from "./reducers/userReducers";
import { activityListReducer } from "./reducers/activityReducers";

const reducer = combineReducers({
  deviceList: deviceListReducer,
  deviceDetails: deviceDetailsReducer,
  deviceDelete: deviceDeleteReducer,
  deviceAdd: deviceAddReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdateId: userUpdateIdReducer,
  activityList: activityListReducer,
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
