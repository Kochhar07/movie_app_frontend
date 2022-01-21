import React from "react";

export const ImageHelper = ({ movie }) => {
  const imageUrl = movie
    ? `http://localhost:5000/api/movie/${movie._id}`
    : `https://static.toiimg.com/photo/msid-73618811/73618811.jpg?133104`;
  return (
    <div className=" border-success p-2">
      <img
        src={imageUrl}
        alt=""
        style={{ width: "80%", height: "80%" }}
        className="mb-3 rounded"
      ></img>
    </div>
  );
};
