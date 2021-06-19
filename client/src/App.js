import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import DeviceScreen from "./screens/DeviceScreen";
import ActivityScreen from "./screens/ActivityScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/device/:id" component={DeviceScreen} />
          <Route path="/activity" component={ActivityScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
