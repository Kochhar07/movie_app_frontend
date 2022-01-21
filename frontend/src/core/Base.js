import React from "react";
import Navbar from "./Navbar";

export const Base = ({
  title = "My title",
  description = "My description",
  className = " text-black p-4",
  children,
}) => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="jumbotron text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead"></p>
        </div>
        <div className={className}>{children}</div>
      </div>
      {/* <footer className="footer mt-auto p-2">
        <div className="container-fluid bg-dark text-white text-center p-2">
          <h4>If you got any questions, feel free to reach out!</h4>
          <button className="btn btn-warning btn-lg">Contact us</button>
        </div>
      </footer> */}
    </div>
  );
};
