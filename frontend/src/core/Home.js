import React, { useState, useEffect } from "react";
import { Base } from "./Base";
import "../styles.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import { getMovie } from "./helper/coreapicalls";

export const Home = () => {
  return (
    <Base title="Book a Movie">
      <div className="row">
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </Base>
  );
};
