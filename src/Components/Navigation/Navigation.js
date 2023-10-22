import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navigation = () => {
  return (
    <>
      <Navbar expand={"md"} bg="dark" data-bs-theme="dark" className="p-1">
        <Container fluid>
          <Navbar.Brand>
            <h1>
              <b>Easy Rent</b>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Easy Rent
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link to="/" style={{ fontSize: "1.2em" }}>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about" style={{ fontSize: "1.2em" }}>
                    About Us
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/machines/soil-cultivation"
                    style={{ fontSize: "1.2em" }}
                  >
                    Machines
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contactUs" style={{ fontSize: "1.2em" }}>
                    Contact Us
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
