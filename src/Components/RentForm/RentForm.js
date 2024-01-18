import { Fragment } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Footer from "../FooterPage/Footer";

const RentForm = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="m-md-5 px-md-5">
        <div align="center" className="m-md-5 px-md-5 m-2">
          <h1>
            <b>Rent With Benifit</b>
          </h1>
          <p style={{ textAlign: "justify" }}>
            We help you rent your product with lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis,
            diam sed tincidunt luctus, velit eros semper eros, sit amet laoreet
            justo ante non turpis. In sit amet luctus nisl, id iaculis lorem.
          </p>
          <hr />
        </div>

        <div className="m-md-5 px-md-5 m-2">
          <FloatingLabel controlId="floatingname" label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingmachine"
            label="Machine Name"
            className="mb-3 p-0"
          >
            <Form.Control type="text" placeholder="Machine Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingBrand"
            label="Brand Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Brand Name" />
          </FloatingLabel>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Your Machine picture</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <FloatingLabel
            controlId="floatingrent"
            label="Rental Price"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="Rental Price" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingdesc"
            label="Machine Description"
            className="mb-3"
          >
            <Form.Control as="textarea" rows={4} />
          </FloatingLabel>

          <div align="center" className="my-3 d-grid">
            <Button
              onClick={() => {
                alert("Successfully added your information");
              }}
              size="lg"
            >
              Rent Your Machine
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default RentForm;
