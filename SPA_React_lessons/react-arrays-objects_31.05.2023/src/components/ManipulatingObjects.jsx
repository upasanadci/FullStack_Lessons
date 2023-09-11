import React, { useState } from "react";

const ManipulatingObjects = () => {
  const [course, setCourse] = useState({
    module: "Single Page Application",
    language: "Javascript",
  });

  // console.log(course)

  const changeHandler = (e) => {
    // update the state
    console.log(e.target.name);
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset() // clear the inputs
  }



  return (
    <div>
      <h1>ManipulatingObjects </h1>
      <h2>Module : {course.module}</h2>
      <h2>Language : {course.language}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Module :
          <input type="text" name="module" onChange={changeHandler} />
        </label>
        <label htmlFor="">
          Language:
          <input type="text" name="language" onChange={changeHandler}/>{" "}
        </label>
        <button type="submit">submit</button>
      </form>
      <hr />
    </div>
  );
};

export default ManipulatingObjects;
