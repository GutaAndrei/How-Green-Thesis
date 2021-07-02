import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import DeviceScreen from "./screens/DeviceScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import ActivitiyAddScreen from "./screens/ActivityAddScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import DeviceAddScreen from "./screens/DeviceAddScreen";
import DeviceListScreen from "./screens/DeviceListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/device/:id" component={DeviceScreen} />
          <Route path="/devices/mydevices" component={DeviceListScreen} />
          <Route path="/devices/add-device" component={DeviceAddScreen} />
          <Route path="/activities/myactivities" component={ActivitiesScreen} />
          <Route
            path="/activities/add-activity"
            component={ActivitiyAddScreen}
          />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
