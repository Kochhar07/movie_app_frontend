export const getMovie = () => {
  return fetch("http://localhost:5000/api/movies", {
    method: "GET",
  })
    .then((resposnem) => {
      return JSON.response();
    })
    .catch((error) => console.log(error));
};
