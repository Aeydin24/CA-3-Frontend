import React, { useState, useEffect } from "react";
import {planetlist} from '../settings';

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(planetlist);
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return (
    <div>
      <span><pre>{JSON.stringify(planets)}</pre></span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Planets;



