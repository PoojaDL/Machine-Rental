import { Fragment } from "react";

import styles from "./MiniAbout.module.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MiniAbout = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <div align="center" className="mt-5">
        <h1 className="display-5 fw-normal">
          <b>About Us</b>
        </h1>
        <Container>
          <div
            className={`p-md-5 py-4 m-4 mb-0 pb-0 ${styles["picture-content"]}`}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                margin: "auto",
              }}
              className={styles["background-picture"]}
            >
              <div
                style={{
                  position: "relative",
                  bottom: "17%",
                  left: "15%",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4795/4795910.png"
                  alt="profile-pic"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div>
              <h2>WE ARE ENERGETIC COMPANY</h2>
              <p style={{ textAlign: "justify" }}>
                We do the best of the best lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
                <span onClick={scrollToTop}>
                  <Link to="/about">
                    <Button
                      variant="secondary"
                      className="btn-sm"
                    >{`Find More >>`}</Button>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default MiniAbout;
