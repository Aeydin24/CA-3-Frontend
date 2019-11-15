import React, { useState, useEffect } from "react";
import {peoplelist} from '../settings';

const Persons = () => {
  const [hasError, setErrors] = useState(false);
  const [persons, setPersons] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(peoplelist);
      res
        .json()
        .then(res => setPersons(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return (
    <div>
      <span><pre>{JSON.stringify(persons)}</pre></span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Persons;