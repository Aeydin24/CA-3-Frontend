import React, { useState, useEffect } from "react";

const Persons = () => {
  const [hasError, setErrors] = useState(false);
  const [persons, setPersons] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.co/api/people/1/");
      res
        .json()
        .then(res => setPersons(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return (
    <div>
      <span>{JSON.stringify(persons)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Persons;