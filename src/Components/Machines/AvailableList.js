import { Fragment } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./AvailableList.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AvailableList = (props) => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const onClickHandler = () => {
    const data = {
      item: props.items,
      pid: props.pid,
      id: props.items.id,
    };
    props.onChoosing(data);
  };
  return (
    <Fragment>
      <Card className={`${styles["card-design"]}`}>
        <img
          variant="top"
          src={props.items.image}
          className="p-3"
          width="100%"
          alt="machine"
        />
        <Card.Body>
          <div align="center">
            <Card.Title>{props.items.fullName}</Card.Title>
            <p className="my-1">
              <b>Brand : </b>
              {props.items.Brand}
            </p>
            <p className="my-1">
              <b>Price: </b>
              <b>{`₹${props.items.Price}/Hour`}</b>
            </p>
            <p className="my-1">
              <b>Location: </b>
              {props.items.Location}
            </p>
            <p className="my-1">
              <b>Contact: </b>
              {props.items.Contact}
            </p>
            <span onClick={scrollToTop}>
              <Link to={`/machines/${props.pid}/${props.items.id}`}>
                <Button onClick={onClickHandler} variant="success">
                  More Info
                </Button>
              </Link>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default AvailableList;
