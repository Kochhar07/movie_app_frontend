export const createMovie = (userId, token, movie) => {
  // console.log("movie", movie);

  return fetch(`http://localhost:5000/api/movie/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    body: movie,
  })
    .then((response) => {
      // console.log("response 1111:", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllMovie = (userId, token, movie) => {
  return fetch("http://localhost:5000/api/movies", {
    method: "GET",
  })
    .then((response) => {
      return response.json;
    })
    .catch((err) => console.log(err));
};

export const getMovie = (movieId) => {
  return fetch(`http://localhost:5000/api/movie/${movieId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json;
    })
    .catch((err) => console.log(err));
};

export const updateaMovie = (movieId, userId, token, movie) => {
  return fetch(`http://localhost:5000/api/movie/${movieId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: movie,
  })
    .then((response) => {
      return response.json;
    })
    .catch((err) => console.log(err));
};

export const deleteaMovie = (movieId, userId, token) => {
  return fetch(`http://localhost:5000/api/movie/${movieId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json;
    })
    .catch((err) => console.log(err));
};
