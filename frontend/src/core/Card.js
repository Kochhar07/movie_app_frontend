import React from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "./helper/ImageHelper";

const Card = ({ movie }) => {
  return (
    <div className="card text-white bg-dark border border-info ">
      <ImageHelper movie={movie}></ImageHelper>
      <div className="card-body">
        <h5 className="card-title">83 </h5>
        <p className="card-text">
          1983 Cricket World Cup taught India to win. 14 men fought against all
          odds. This is their Story!
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-dark text-white">
          89% 102.6K ratings
        </li>
        <li className="list-group-item bg-dark text-white">24 Dec, 2021</li>
      </ul>
      <div className="card-body">
        <Link to="/bookTicket" className="btn btn-danger">
          Book Ticket
        </Link>
      </div>
    </div>
  );
};

export default Card;
