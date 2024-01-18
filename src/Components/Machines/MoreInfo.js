import { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./MoreInfo.module.css";

const MoreInfo = (props) => {
  const totalPrice = props.item.Price + 500;

  const clickHandler = () => {
    props.onCancel();
  };

  return (
    <Fragment>
      <div
        style={{
          position: "absolute",
          padding: "5%",
          top: "0px",
          zIndex: "10",
          width: "100%",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ background: "white", borderRadius: "0.8rem" }}>
          <Button
            className="btn btn-danger mt-4 ms-4 mb-3"
            onClick={clickHandler}
          >
            Back
          </Button>
          <div align="center">
            <h2>{props.item.id.toUpperCase()}</h2>
          </div>
          <div
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              justifyContent: "center",
              zIndex: "10px",
            }}
            className="m-2 mt-5"
          >
            <Card className={`${styles.imageBody}`}>
              <img
                src={props.item.image}
                alt={props.id}
                className={styles["machine-image"]}
              />
            </Card>
            <div className="mx-3">
              <h3>Specification</h3>
              <hr />
              {Object.keys(props.item).map((oneKey, i) => {
                return (
                  oneKey !== "image" &&
                  oneKey !== "id" &&
                  oneKey !== "Price" && (
                    <p key={i} className="my-1">
                      <b>{oneKey} :</b>
                      {props.item[oneKey]}
                    </p>
                  )
                );
              })}
            </div>
          </div>
          <div className="m-md-5 px-md-5 p-3">
            <h3>Description</h3>
            <hr />
            <p style={{ textAlign: "justify" }}>
              Best Yanmar powered hydraulic excavator for rent. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore mque laud antium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto be atae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores. Eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam es qui dolorem ipsum quia dolor sit amet consectetur,
              adipisci velit sed quia non numquam eius modiy.
            </p>
            <ul>
              <li>Nostrud exercitation ullamco laboris</li>
              <li>Ut aliquip ex ea reprehen deritin voluptate</li>
              <li>Adipisicing elit sed eiusmod tempor incididunt</li>
              <li>Labore dolore magna aliqua veniam nostrud</li>
            </ul>
          </div>
          <div align="center" className="pb-5">
            <Card className={styles.cardBody}>
              <Card.Header>
                <h2>
                  Rental Price : <b>{`₹${props.item.Price}`}</b>
                </h2>
              </Card.Header>
              <Card.Body>
                <p>Hourly Rent : {`₹${props.item.Price}`}</p>
                <p>Driver Charge : ₹300</p>
                <p>Extra Charges : ₹200</p>
                <h2>Total Cost : ₹{totalPrice}</h2>
                <Button
                  onClick={() => {
                    alert("Booked Successfully");
                  }}
                  variant="primary"
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MoreInfo;
