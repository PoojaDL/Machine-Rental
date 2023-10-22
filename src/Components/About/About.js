import { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./About.module.css";
import Footer from "../FooterPage/Footer";

const About = () => {
  return (
    <Fragment>
      <Navigation />
      <div
        align="center"
        className={`mx-md-5 m-3 p-md-5 p-4 ${styles.wholeBox}`}
      >
        <h1 className="display-5 fw-normal">
          <b>Who are we !</b>
        </h1>
        <img
          src="https://www.agriculture.com/thmb/FSBjVymAYFHSNxBHSlnthmKuYAw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220627_SuccessfulFarming-CenturyFarm_1703-6dcfef151b8a4fb8b9ed649f06562f4b.jpg"
          alt="profile"
          className={styles.topImage}
          style={{ borderRadius: "5%" }}
        />
        <p style={{ textAlign: "justify" }} className="mt-3">
          We do the best of the best lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Etiam convallis, diam sed tincidunt
          luctus, velit eros semper eros, sit amet laoreet justo ante non
          turpis. In sit amet luctus nisl, id iaculis lorem.
        </p>
        <div>
          <h1 className="display-5 fw-normal mt-5 mb-3">
            <b>Why Choose Us !</b>
          </h1>
          <p style={{ textAlign: "justify" }}>
            Aenean in pretium dui. Morbi in magna in tortor lacinia vulputate ut
            eget odio. Donec porta mauris libero. Maecenas a commodo nisi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis,
            diam sed tincidunt luctus, velit eros semper eros, sit amet laoreet
            justo ante non turpis. In sit amet luctus nisl, id iaculis lorem.
          </p>
          <div className={styles.accFlex}>
            <div className={styles.accomplished}>
              <h1 className="display-4 fw-normal">
                <b>670+</b>
              </h1>
              <p>Project Completed</p>
            </div>
            <div className={styles.accomplished}>
              <h1 className="display-4 fw-normal">
                <b>1000+</b>
              </h1>
              <p>Happu Clients</p>
            </div>
            <div className={styles.accomplished}>
              <h1 className="display-4 fw-normal">
                <b>52+</b>
              </h1>
              <p>Branch Location</p>
            </div>
            <div className={styles.accomplished}>
              <h1 className="display-4 fw-normal">
                <b>49+</b>
              </h1>
              <p>Equipment Fleet</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
