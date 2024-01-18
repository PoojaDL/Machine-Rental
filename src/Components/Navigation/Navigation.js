import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar
        expand={"md"}
        bg="dark"
        data-bs-theme="dark"
        varient="dark"
        style={{ position: "sticky", top: 0, zIndex: 10 }}
        onClick={scrollToTop}
      >
        <Container fluid>
          <Navbar.Brand>
            <h1 className="ps-1">Easy Rent</h1>
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
                <NavLink
                  className={styles.navLink}
                  to="/home"
                  activeClassName={styles.active}
                >
                  Home
                </NavLink>
                <NavLink
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to="/machines/soil-cultivation"
                >
                  Machines
                </NavLink>
                <NavLink
                  className={styles.navLink}
                  activeClassName={styles.active}
                  to="/contactUs"
                >
                  Contact-Us
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
