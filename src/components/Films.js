import React, { useState, useEffect } from "react";
import {filmlist} from '../settings';

const Films = () => {
  const [hasError, setErrors] = useState(false);
  const [films, setFilms] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(filmlist);
      res
        .json()
        .then(res => setFilms(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return (
    <div>
      <span><pre>{JSON.stringify(films)}</pre></span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Films;