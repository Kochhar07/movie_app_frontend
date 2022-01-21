import React, { useState } from "react";
import { Base } from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createMovie } from "./helper/adminapicall";

export const AddMovie = () => {
  var { user, token } = isAutheticated();
  // console.log(token);

  const [values, setValues] = useState({
    title: "",
    description: "",
    rating: "",
    releaseDate: "",
    loading: "",
    photo: "",
    error: "",
    createdProduct: "",
    getRedirect: false,
    formData: "",
  });
  const {
    title,
    description,
    rating,
    photo,
    releaseDate,
    createdProduct,
    getRedirect,
    error,
    formData,
  } = values;
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);

  const goBack = () => {
    return (
      <div className="mt-5">
        <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
          Admin DashBoard
        </Link>
      </div>
    );
  };

  const handleSubmit = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData: new formData() });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    // console.log(user._id);
    // console.log(token);
    // console.log(formData);

    createMovie(user._id, token, formData).then((data) => {
      // console.log("data:", formData);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          description: "",
          rating: "",
          releaseDate: "",
          photo: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left ">
          <div
            className="alert alert-success"
            style={{ display: createdProduct ? "" : "none" }}
          >
            <h4>{createdProduct} created successfully</h4>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left ">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const myMovieForm = () => (
    <form>
      <div className="form-control">
        <p className="lead">Enter the movie</p>
        <label className="btn btn-block btn-success">
          <input
            type="file"
            values={photo}
            accept="image"
            onChange={handleSubmit("photo")}
            placeholder="choose a file"
          />
        </label>

        <input
          type="text"
          className="form-control my-3"
          placeholder=" Movie Title"
          onChange={handleSubmit("title")}
          values={title}
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Description"
          onChange={handleSubmit("description")}
          values={description}
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Rating"
          onChange={handleSubmit("rating")}
          values={rating}
        />
        <input
          type="text"
          className="form-control my-3"
          placeholder="Release Date"
          onChange={handleSubmit("releaseDate")}
          values={releaseDate}
        />
        <button className="btn btn-info mx-2" onClick={onSubmit}>
          Create a movie
        </button>
        {/* <button className="btn btn-outline-info mx-2">Change a movie</button>
        <button className="btn btn-outline-info mx-2">Cancel a movie</button> */}
      </div>
    </form>
  );

  return (
    <Base title="Create a movie" className="container bg-info p-4">
      <div className="row bg-white rounder">
        <div className="col-md-8 offset-md-2">
          {successMessage}
          {errorMessage}
          {myMovieForm()} {goBack()}
        </div>
      </div>
    </Base>
  );
};
