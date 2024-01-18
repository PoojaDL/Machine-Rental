import { Fragment } from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./AvailableList.module.css";

const MachineNav = () => {
  return (
    <Fragment>
      <div className="mt-5">
        <Nav variant="tabs" defaultActiveKey="/machines/soil-cultivation">
          <Nav.Item>
            <Nav.Link>
              <NavLink
                activeClassName={styles.active}
                to="/machines/soil-cultivation"
              >
                Soil Cultivation
              </NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink activeClassName={styles.active} to="/machines/harvester">
                Harvester
              </NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink
                activeClassName={styles.active}
                to="/machines/f-p-dispenser"
              >
                Fertilizer and Pesticide dispenser
              </NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink activeClassName={styles.active} to="/machines/loaders">
                Loader
              </NavLink>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Fragment>
  );
};
export default MachineNav;
