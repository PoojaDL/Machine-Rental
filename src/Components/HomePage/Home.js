import { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Header from "./Header";
import MiniAbout from "./MiniAbout";
import Categories from "./Categories";
import WhyUs from "./WhyUs";
import Reviews from "./Reviews";
import Footer from "../FooterPage/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <MiniAbout />
      <Categories />
      <WhyUs />
      <Reviews />
      <Footer />
    </Fragment>
  );
};

export default Home;
