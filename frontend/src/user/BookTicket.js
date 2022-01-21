import { useState, useEffect } from "react";
import { isAutheticated } from "../auth/helper";
import axios from "axios";
import { Base } from "../core/Base";
import { Link } from "react-router-dom";

const BookTicket = () => {
  const [post, setPost] = useState({
    message: "",
    openTickets: [],
  });
  var { user, token } = isAutheticated();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ticket/${user._id}/open_ticket`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPost({ ...post, openTickets: response.data.seats });
      });
  }, []);

  const li_available = {
    width: "50px",
    padding: "10px",
    display: "inline-flex",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "10px",
    border: "2px solid black",
    background: "#00FF00",
  };
  const li_blocked = {
    ...li_available,
    background: "#ed3251",
    cursor: "not-allowed",
    color: "black",
  };

  var listItems = "";
  var seats = [];
  for (let index = 1; index < 97; index++) {
    seats.push(index);
  }

  const onClick = (e) => {
    const obj = e.target.id;
    const data = JSON.stringify({
      seat_number: Number(obj),
    });
    axios
      .post(`http://localhost:5000/api/ticket/${user._id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        // setPost({ ...post, message: response.data.message });
      });
    window.location.reload(false);
  };

  if (post) {
    listItems = seats.map((number) => {
      return post.openTickets.length === 0 ||
        post.openTickets.includes(number) ? (
        <li style={li_available} id={number} key={number} onClick={onClick}>
          <strong>{number}</strong> <br />
        </li>
      ) : (
        <li style={li_blocked} key={number}>
          <strong>{number}</strong> <br />
        </li>
      );
    });
  }

  return (
    <Base title="Pick your seats">
      <h4
        style={{
          color: "white",
          display: "inline-block",
          border: "1px solid white",
          background: "black",
          width: "100%",
          borderRadius: "10px",
          textAlign: "center",
          // height: "10px",
          margin: "auto",
          float: "center",
          marginBottom: "2px",
        }}
      >
        Screen
      </h4>
      {<ul>{listItems}</ul>}
      <li
        style={{
          width: "12%",
          // padding: "10px",
          display: "inline-block",
          borderRadius: "10px",
          cursor: "pointer",
          margin: "10px",
          border: "2px solid black",
          background: "#00FF00",
          textAlign: "center",
        }}
      >
        Seats UnBooked
      </li>

      <li
        style={{
          width: "12%",
          // padding: "10px",
          display: "inline-block",
          borderRadius: "10px",
          cursor: "pointer",
          margin: "10px",
          border: "2px solid black",
          background: "#ed3251",
          float: "right",
          textAlign: "center",
        }}
      >
        Seats Booked
      </li>
      <li>
        <Link
          to="/ticket/confirmTicket"
          className="btn btn-success"
          style={{
            my: "2px",
            // textAlign: "center",
            margin: "auto",
            display: "flex",
            width: "23%",
            borderRadius: "7px",
          }}
        >
          Continue to confirm your booking
        </Link>
      </li>
    </Base>
  );
};

export default BookTicket;
