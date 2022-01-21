import React, { useEffect, useState } from "react";
import { Base } from "../core/Base";
import { isAutheticated } from "../auth/helper";
import axios from "axios";

export const AdminCancelTicket = () => {
  const [post, setPost] = useState({
    view_tickets: [],
  });
  var { user, token } = isAutheticated();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ticket/${user._id}/close_ticket`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("view_tickets:", response.data.allTickets);
        var seats = [];
        for (let ticket of response.data.allTickets) {
          seats.push(ticket.seat_number);
        }
        setPost({
          ...post,
          view_tickets: seats,
        });
      });
  }, []);

  const onClick = (e) => {
    const obj = e.target.id;
    // console.log(obj);
    // const data = JSON.stringify({
    //   seat_number: Number(obj),
    // });
    axios
      .delete(
        `http://localhost:5000/api/admin/${user._id}/cancel_ticket/${obj}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        // setPost({ ...post, message: response.data.message });
      });
    window.location.reload(false);
  };

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

  listItems = seats.map((number) => {
    return post.view_tickets.length === 0 ||
      post.view_tickets.includes(number) ? (
      <li style={li_available} id={number} key={number} onClick={onClick}>
        <strong>{number}</strong> <br />
      </li>
    ) : (
      <li style={li_blocked} key={number}>
        <strong>{number}</strong> <br />
      </li>
    );
  });
  return (
    <Base title="Ticket Details">
      {<ul>{listItems}</ul>}
      <li
        style={{
          width: "15%",
          padding: "10px",
          display: "inline-flex",
          borderRadius: "10px",
          cursor: "pointer",
          margin: "10px",
          border: "2px solid black",
          background: "#00FF00",
        }}
      >
        {" "}
        Seats Booked
      </li>
      <li
        style={{
          width: "15%",
          padding: "10px",
          display: "inline-flex",
          borderRadius: "10px",
          cursor: "pointer",
          margin: "10px",
          border: "2px solid black",
          background: "#ed3251",
        }}
      >
        Seats UnBooked
      </li>
    </Base>
  );
};
