import { Fragment } from "react";
import styles from "./WhyUs.module.css";
import { Col, Row } from "react-bootstrap";

const WhyUs = () => {
  return (
    <Fragment>
      <div align="center" className="mt-sm-5 mt-md-0 my-5">
        <h1 className="display-5 fw-normal">
          <b>Why You Should Choose Us?</b>
        </h1>

        <div className="mt-5">
          <Row
            className={styles.element}
            style={{ backgroundColor: "#e6e6e6" }}
          >
            <Col className="col-3 my-auto p-0 mt-0">
              <img
                width="80px"
                height="80px"
                src="https://cdn-icons-png.flaticon.com/128/1161/1161439.png"
                alt="ChitChat Logo"
              />
            </Col>
            <Col className="col-9">
              <div className={styles.heading}>
                <h2>Fully Insured Rentals</h2>
              </div>
              <p className={styles.description}>
                Cursus ullamcorper ultricies amet imperdiet amet risus volutpat.
              </p>
            </Col>
          </Row>

          <Row
            className={styles.element}
            style={{ backgroundColor: "#fff6b3" }}
          >
            <Col className="col-9">
              <div className={styles.heading}>
                <h2>No Hidden Charges</h2>
              </div>
              <p className={styles.description}>
                Cursus ullamcorper ultricies amet imperdiet amet risus volutpat.
              </p>
            </Col>
            <Col className="col-3 my-auto p-0 mb-0">
              <img
                width="80px"
                height="80px"
                src="https://cdn-icons-png.flaticon.com/128/5169/5169865.png"
                alt="ChitChat Logo"
              />
            </Col>
          </Row>

          <Row
            className={styles.element}
            style={{ backgroundColor: "#e6e6e6" }}
          >
            <Col className="col-3 my-auto p-0 mt-0">
              <img
                width="80px"
                height="80px"
                src="https://cdn-icons-png.flaticon.com/128/5486/5486264.png"
                alt="ChitChat Logo"
              />
            </Col>
            <Col className="col-9">
              <div className={styles.heading}>
                <h2>Brands Equipments</h2>
              </div>
              <p className={styles.description}>
                Cursus ullamcorper ultricies amet imperdiet amet risus volutpat.
              </p>
            </Col>
          </Row>

          <Row
            className={styles.element}
            style={{ backgroundColor: "#fff6b3" }}
          >
            <Col className="col-9">
              <div className={styles.heading}>
                <h2>Smarter Way To Rent</h2>
              </div>
              <p className={styles.description}>
                Cursus ullamcorper ultricies amet imperdiet amet risus volutpat.
              </p>
            </Col>
            <Col className="col-3 m-auto p-0 mb-0">
              <img
                width="80px"
                height="80px"
                src="https://cdn-icons-png.flaticon.com/128/9817/9817116.png"
                alt="ChitChat Logo"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default WhyUs;
