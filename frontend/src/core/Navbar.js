import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#FFFFFF" };
  } else {
    return { color: "#32a852" };
  }
};

const Navbar = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            style={currentTab(history, "/about")}
            className="nav-link"
            to="/about"
          >
            About
          </Link>
        </li> */}
        {isAutheticated() && isAutheticated().user.role === 0 && (
          <li className="nav-item ml-auto">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              User Dashboard
            </Link>
          </li>
        )}
        {isAutheticated() && isAutheticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              Admin Dashboard
            </Link>
          </li>
        )}

        {!isAutheticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/register")}
                className="nav-link"
                to="/register"
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/login")}
                className="nav-link"
                to="/login"
              >
                Login
              </Link>
            </li>
          </Fragment>
        )}

        {isAutheticated() && (
          <li className="nav-item ">
            <span
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
