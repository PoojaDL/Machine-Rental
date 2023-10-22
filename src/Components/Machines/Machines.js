import { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import MachineNav from "./MachineNav";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import Available from "./Available";
import Footer from "../FooterPage/Footer";

const Machines = () => {
  return (
    <Fragment>
      <Navigation />
      <MachineNav />
      <Route path="/machines">
        <Redirect to="/machines/soil-cultivation" />
      </Route>
      <Route path="/machines/:id">
        <Available />
      </Route>
      <Footer />
    </Fragment>
  );
};

export default Machines;
