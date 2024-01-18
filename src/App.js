import "./App.css";
import { Fragment } from "react";
import Home from "./Components/HomePage/Home";
import Machines from "./Components/Machines/Machines";
import ContactUs from "./Components/ContactUs/ContactUs";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import About from "./Components/About/About";
import RentForm from "./Components/RentForm/RentForm";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route path="/rentalForm">
          <RentForm />
        </Route>
        <Route path="/machines">
          <Machines />
        </Route>
        <Route path="/" exaxt>
          <Redirect to="/home" />
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
