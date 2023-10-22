import { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Categories.module.css";

const Categories = () => {
  const data = [
    {
      category: "Soil Cultivation",
      image: "soilCultivation.jpg",
      desc: "Tools used for tilling or ploughing include plough, plank and leveller. Ploughs are made up of wood or iron.",
    },
    {
      category: "Harvester",
      image: "harvester.jpg",
      desc: "90+ combine harvesters are available at Tractor Junction. Here, you can get all top brands of tractor harvester at an affordable harvester machine price.",
    },
    {
      category: "Fertilizer and Pesticide dispenser",
      image: "sprayer.jpg",
      desc: "Spray pumps range from small-spot-spraying machines to larger sprayers that are designed for extensive land and plant coverage.",
    },
    {
      category: "Loader",
      image: "loader.jpg",
      desc: "Loaders are tractor-mounted farm implements that are attached to the front of the tractors. These are used to dig trenches, holes, pits, and poles.",
    },
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <div align="center" className="mt-sm-5 mt-md-0 my-5">
        <h1 className="display-5 fw-normal">
          <b>Categories </b>
        </h1>
        <div
          className={`my-3 mx-3 ${styles["overflow"]}`}
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          {data.map((item) => (
            <div key={item.category} className={`my-3 ${styles.cards}`}>
              <Card style={{ width: "18rem", background: "#999999" }}>
                <Card.Img
                  variant="top"
                  width="300px"
                  height="200px"
                  src={process.env.PUBLIC_URL + `/images/${item.image}`}
                />
                <Card.Body>
                  <Card.Title>{item.category}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <span onClick={scrollToTop}>
                    <Link to="/machines/soil-cultivation">
                      <Button variant="warning">Check Out</Button>
                    </Link>
                  </span>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
