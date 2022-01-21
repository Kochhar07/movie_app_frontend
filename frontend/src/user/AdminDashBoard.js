import React from "react";
import { Base } from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";

export const AdminDashBoard = () => {
  const {
    user: { name, email },
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h3
          className="card-header text-center"
          style={{ background: "#c0edec" }}
        >
          Admin Workplace
        </h3>
        <ul className="list-group">
          {/* <li className="list-group-item">
            <Link to="/admin/create/movie" className="nav-link text-dark">
              Create Movie
            </Link>
          </li> */}
          {/* <li className="list-group-item">
            <Link className="nav-link text-dark">Update Movie</Link>
          </li> */}
          <li className="list-group-item">
            <Link
              to="/admin/ticket/closedTicket"
              className="nav-link text-dark"
            >
              View All Booking
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/admin/ticket/cancelTicket"
              className="nav-link text-dark"
            >
              Cancel Ticket
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/ticket/resetTicket" className="nav-link text-dark">
              Reset Seats
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card">
        <h3
          className="card-header text-center"
          style={{ background: "#c0edec" }}
        >
          Admin Information
        </h3>

        <ul className="list-group">
          <li className="list-group-item">
            <h5>
              <span className="badge badge-dark mr-2 text-primary">Name:</span>
              {name}
            </h5>
          </li>
          <li className="list-group-item">
            <h5>
              <span className="badge badge-dark mr-2 text-primary">Email:</span>
              {email}
            </h5>
          </li>
          <li className="list-group-item">
            <h5>
              <span className="badge badge-dark mr-2 text-primary">Role:</span>
              Admin
            </h5>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base title="Welcome to admin area">
      <div className="row">
        <div className="col-md-4">{adminLeftSide()}</div>
        <div className="col-md-8">{adminRightSide()}</div>
      </div>
    </Base>
  );
};
