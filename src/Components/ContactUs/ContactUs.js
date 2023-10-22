import { Fragment } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./ContactUs.module.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../FooterPage/Footer";

const ContactUs = () => {
  return (
    <Fragment>
      <Navigation />
      <div>
        <div className={`p-3 ${styles["flex-container"]}`}>
          <div className="p-3">
            <h1>
              <b>Get In Touch</b>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <hr />
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextname"
              >
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="name" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="pooja@gmail.com" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextsubject"
              >
                <Form.Label column sm="2">
                  Subject
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="subject" />
                </Col>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button className="btn btn-lg btn-warning mx-auto">
                Send Now
              </Button>
            </Form>
          </div>
          <div className="p-3">
            <h1>
              <b>Other ways</b>
            </h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                marginTop: "2rem",
                justifyContent: "center",
              }}
              align="center"
            >
              <div
                className="p-2"
                align="center"
                style={{ width: "30vh", height: "18vh", background: "#e6e6e6" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3687/3687004.png"
                  alt="call"
                  width="50%"
                  height="60%"
                />
                <h5 style={{ margin: "0px" }}>Phone</h5>
                <h6 style={{ margin: "0px" }}>345-644-777</h6>
              </div>
              <div
                className="p-2"
                align="center"
                style={{ width: "30vh", height: "18vh", background: "#e6e6e6" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                  alt="call"
                  width="50%"
                  height="60%"
                />
                <h5 style={{ margin: "0px" }}>Whatsapp</h5>
                <h6 style={{ margin: "0px" }}>082-123-234-345</h6>
              </div>
              <div
                className="p-2"
                align="center"
                style={{ width: "30vh", height: "18vh", background: "#e6e6e6" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3686/3686989.png"
                  alt="call"
                  width="50%"
                  height="60%"
                />
                <h5 style={{ margin: "0px" }}>Email</h5>
                <h6 style={{ margin: "0px" }}>support@yoursite.com</h6>
              </div>
              <div
                className="p-2"
                align="center"
                style={{ width: "30vh", height: "18vh", background: "#e6e6e6" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5616/5616461.png"
                  alt="call"
                  width="50%"
                  height="60%"
                />
                <h5 style={{ margin: "0px" }}>Office</h5>
                <h6 style={{ margin: "0px" }}>London SE1 7PB, UK</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
