import { Fragment } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const MachineNav = () => {
  return (
    <Fragment>
      <div className="mt-5">
        <Nav variant="tabs" defaultActiveKey="/machines/soil-cultivation">
          <Nav.Item>
            <Nav.Link>
              <Link to="/machines/soil-cultivation">Soil Cultivation</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/machines/harvester">Harvester</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/machines/f-p-dispenser">
                Fertilizer and Pesticide dispenser
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/machines/loaders">Loader</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Fragment>
  );
};
export default MachineNav;
