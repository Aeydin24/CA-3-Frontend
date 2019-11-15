import React, { useState, useEffect } from "react";

const Films = () => {
  const [hasError, setErrors] = useState(false);
  const [films, setFilms] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.co/api/films/2/");
      res
        .json()
        .then(res => setFilms(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return (
    <div>
      <span>{JSON.stringify(films)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Films;