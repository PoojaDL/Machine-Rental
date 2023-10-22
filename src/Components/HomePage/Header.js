import { Fragment } from "react";
import styles from "./Header.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <Fragment>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/machine-main.jpg"
          })`,
        }}
      >
        <div
          className={`col-md-7 px-3 py-4 mx-auto bg-white ${styles["header-content"]}`}
        >
          <h1 className="display-3 fw-normal ">
            <b>Have any rental machineries?</b>
          </h1>
          <p className="lead fw-normal">
            Rent your machines with us and get more benifits then usual process.
          </p>
          <Link to="/rentalForm">
            <Button className="btn-light btn-outline-secondary">
              Give Rental
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
