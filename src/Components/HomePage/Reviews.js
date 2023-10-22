import { Fragment } from "react";
import { Card } from "react-bootstrap";
import styles from "./MiniAbout.module.css";

const Reviews = () => {
  const data = [
    {
      name: "Laura sant",
      image: "https://cdn-icons-png.flaticon.com/128/4140/4140047.png",
      desc: "Tools used for tilling or ploughing include plough, plank and leveller. Ploughs are made up of wood or iron.",
    },
    {
      name: "John Smith",
      image: "https://cdn-icons-png.flaticon.com/128/4139/4139981.png",
      desc: "90+ combine harvesters are available at Tractor Junction. Here, you can get all top brands of tractor harvester at an affordable harvester machine price.",
    },
    {
      name: "Dave culter",
      image: "https://cdn-icons-png.flaticon.com/128/4140/4140061.png",
      desc: "Spray pumps range from small-spot-spraying machines to larger sprayers that are designed for extensive land and plant coverage.",
    },
    {
      name: "Jasmine",
      image: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
      desc: "Loaders are tractor-mounted farm implements that are attached to the front of the tractors. These are used to dig trenches, holes, pits, and poles.",
    },
  ];

  return (
    <Fragment>
      <div align="center" className="mt-sm-5 mt-md-0 my-5">
        <h1 className="display-5 fw-normal">
          <b>Reviews</b>
        </h1>
        <div
          className={`my-3 mx-5 ${styles["overflow-layout"]}`}
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          {data.map((item) => (
            <div key={item.name} className={`my-3 ${styles.cards}`}>
              <Card
                style={{
                  width: "14rem",
                  color: "white",
                  background: "#999999",
                  border: "1px solid grey",
                }}
                className="py-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11042/11042331.png"
                  width="50px"
                  height="50px"
                  alt="quote-icon"
                  className="mx-auto"
                />
                <Card.Body>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
                <img
                  width="100px"
                  height="100px"
                  src={item.image}
                  alt="person"
                  style={{ borderRadius: "50%", margin: "auto" }}
                />
                <h3 style={{ color: "#FAC14C" }}>{item.name}</h3>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Reviews;
