import React, { Fragment } from "react";
import "../styles.css";

import Menu from "./Menu";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

// history must match with path which is /signup e.g
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Layout = ({ children, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const adminLinks = () => {
    return (
      <Fragment>
        <div className="sb-sidenav-menu-heading">Core</div>
        <Link className="nav-link" style={isActive(history, "/")} to="/">
          <div className="sb-nav-link-icon">
            <i className="fas fa-tachometer-alt" />
          </div>
          Dashboard
        </Link>

        {/* <Link className="nav-link" style={isActive(history, `/profile/${userInfo._id}`)} to={`/profile/${userInfo._id}`}>
                    <div className="sb-nav-link-icon"><i className="bi bi-person-badge-fill"/></div>
                    Update Profile
                </Link> */}

        <Link
          className="nav-link"
          style={isActive(history, "/list/users")}
          to="/list/users"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-people" />
          </div>
          List Users
        </Link>

        <div className="sb-sidenav-menu-heading">Modules</div>
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseLayouts"
          aria-expanded="false"
          aria-controls="collapseLayouts"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-eyedropper" />
          </div>
          Laboratory
          <div className="sb-sidenav-collapse-arrow">
            <i className="fas fa-angle-down" />
          </div>
        </a>
        <div
          className="collapse"
          id="collapseLayouts"
          aria-labelledby="headingOne"
          data-parent="#sidenavAccordion"
        >
          <nav className="sb-sidenav-menu-nested nav">
            <Link
              className="nav-link"
              style={isActive(history, "/list-cat-test")}
              to="/list-cat-test"
            >
              Category Test
            </Link>
            <Link
              className="nav-link"
              style={isActive(history, "/test-result")}
              to="/test-result"
            >
              Tests Result
            </Link>
          </nav>
        </div>

        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-journal-medical" />
          </div>
          Modules Mgmt
          <div className="sb-sidenav-collapse-arrow">
            <i className="fas fa-angle-down" />
          </div>
        </a>
        <div
          className="collapse"
          id="collapsePages"
          aria-labelledby="headingTwo"
          data-parent="#sidenavAccordion"
        >
          <nav
            className="sb-sidenav-menu-nested nav accordion"
            id="sidenavAccordionPages"
          >
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#pagesCollapseAuth"
              aria-expanded="false"
              aria-controls="pagesCollapseAuth"
            >
              Medication
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="pagesCollapseAuth"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordionPages"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link
                  className="nav-link"
                  style={isActive(history, "/list-treat-cat")}
                  to="/list-treat-cat"
                >
                  Treatment
                </Link>
                <Link
                  className="nav-link"
                  style={isActive(history, "/list-prescriptions")}
                  to="/list-prescriptions"
                >
                  Prescription List
                </Link>
              </nav>
            </div>
            {/* <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#pagesCollapseError"
              aria-expanded="false"
              aria-controls="pagesCollapseError"
            >
              Buildings-Floor
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="pagesCollapseError"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordionPages"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link
                  className="nav-link"
                  style={isActive(history, "/list-buildings")}
                  to="/list-buildings"
                >
                  Building
                </Link>
                <Link
                  className="nav-link"
                  style={isActive(history, "/list-floors")}
                  to="/list-floors"
                >
                  Floors
                </Link>
                <Link
                  className="nav-link"
                  style={isActive(history, "/list-departs")}
                  to="/list-departs"
                >
                  Department
                </Link>
              </nav>
            </div> */}
          </nav>
        </div>

        <div className="sb-sidenav-menu-heading">User Files</div>

        <Link
          className="nav-link"
          style={isActive(history, "/list-patients")}
          to="/list-patients"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-file-medical" />
          </div>
          Patients
        </Link>

         {/* <Link
          className="nav-link"
          style={isActive(history, "/list-doctors")}
          to="/list-doctors"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-file-medical" />
          </div>
          Doctors
        </Link> */}

        <div className="sb-sidenav-menu-heading">Pharmacy</div>

        <Link
          className="nav-link"
          style={isActive(history, "/list/medicine")}
          to="/list/medicine"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-shop" />
          </div>
          Medicine
        </Link>

        {/* <Link
          className="nav-link"
          style={isActive(history, "/list/medicine")}
          to="/list/medicine"
        >
          <div className="sb-nav-link-icon"></div>
          Medicine
        </Link> */}

        <div className="sb-sidenav-menu-heading">Expenses</div>
        <Link
          className="nav-link"
          style={isActive(history, "/list-expenses")}
          to="/list-expenses"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-cash" />
          </div>
          Expenses
        </Link>

        {/* <div className="sb-sidenav-menu-heading">Vaccine</div>
        <Link
          className="nav-link"
          style={isActive(history, "/list-vaccine-cat")}
          to="/list-vaccine-cat"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-eyedropper" />
          </div>
          Vaccine
        </Link> */}

        {/* <Link
          className="nav-link"
          style={isActive(history, "/list-app-vaccine")}
          to="/list-app-vaccine"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-card-list" />
          </div>
          Appointments
        </Link> */}

        {/* <div className="sb-sidenav-menu-heading">Doctors Department</div>

        <Link
          className="nav-link"
          style={isActive(history, "/list-designate")}
          to="/list-designate"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-journal-medical" />
          </div>
          Designation
        </Link>
        <Link
          className="nav-link"
          style={isActive(history, "/list-specialize")}
          to="/list-specialize"
        >
          <div className="sb-nav-link-icon">
            <i className="bi bi-journal-medical" />
          </div>
          Specialize
        </Link> */}
      </Fragment>
    );
  };

  const loggedIn = () => <div className="small">Logged in as:</div>;
  return (
    <nav className="sb-nav-fixed">
      <Menu />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">{adminLinks()}</div>
            </div>
            <div className="sb-sidenav-footer">
              {loggedIn()}
              {userInfo.name}
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              <img src="data:image/png;base64,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"/>
               <ol className="breadcrumb mb-6">
                 <li className="breadcrumb-item active"></li>
              </ol>
              {children}
            </div>
          </main>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Layout);
