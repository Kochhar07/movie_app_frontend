import React, { useState, useEffect } from "react";
import { Base } from "../core/Base";
import QRCode from "qrcode";
import { isAutheticated } from "../auth/helper";
import axios from "axios";

export const Confirm = () => {
  const { user, token } = isAutheticated();
  const [src, setSrc] = useState({});
  const [details, setDetails] = useState({
    name: user.name,
    email: user.email,
    seats: [],
  });

  // const successMessage = () => {
  //   return (
  //     <div className="row">
  //       <div className="col-md-6 offset-sm-3 text-left ">
  //         <div
  //           className="alert alert-success"
  //           style={{ display: success ? "" : "none" }}
  //         >
  //           New Account cretated successfully.
  //           <Link to="/login">Login Here</Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:5000/api/ticket/${user._id}/view_ticket`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setDetails({ ...details, seats: response.data.seats });
    QRCode.toDataURL(
      `Name: ${user.name}, Email: ${user.email}, Seats: [${response.data.seats}] }`
    ).then(setSrc);
  }, []);

  var seats = "";
  for (let i = 0; i < details.seats.length; i++) {
    seats = seats + details.seats[i] + "\t";
  }
  return (
    <Base title="Ticket Confirmed">
      <div className="row">
        {/* Leftside */}
        <div className="col-md-6">
          <div>
            <h2
              style={{
                textAlign: "center",
                background: "#c0edec",
                border: "2px solid black",
                padding: "5px",
                borderRadius: "7px",
              }}
            >
              Scan below for your booking details:
            </h2>
            <div>
              <img src={src} alt="QR Code" style={{ width: "300px" }} />
            </div>
          </div>
        </div>
        {/* Rightside */}
        <div className="col-md-6" style={{ color: "white", fontSize: "24px" }}>
          <div className="row">
            <div className="col-md-4">Name</div>
            <div className="col-md-8">{details.name}</div>
          </div>
          <div className="row">
            <div className="col-md-4">Email</div>
            <div className="col-md-8">{details.email}</div>
          </div>
          <div className="row">
            <div className="col-md-4">Seats</div>
            <div className="col-md-8">
              {seats.length > 0 ? seats : "No seats booked"}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
