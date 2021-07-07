import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deviceListReducer,
  deviceDetailsReducer,
  deviceDeleteReducer,
  deviceAddReducer,
  deviceUpdateReducer,
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
import {
  activityAddDevicesReducer,
  activityDeleteReducer,
  activityDetailsReducer,
  activityListReducer,
  activityUpdateReducer,
} from "./reducers/activityReducers";

const reducer = combineReducers({
  deviceList: deviceListReducer,
  deviceDetails: deviceDetailsReducer,
  deviceDelete: deviceDeleteReducer,
  deviceAdd: deviceAddReducer,
  deviceUpdate: deviceUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdateId: userUpdateIdReducer,
  activityList: activityListReducer,
  activityDetails: activityDetailsReducer,
  activityAddDevices: activityAddDevicesReducer,
  activityUpdate: activityUpdateReducer,
  activityDelete: activityDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
let initialState;
if (userInfoFromStorage) {
  initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  };
}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
