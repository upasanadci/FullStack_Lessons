import React, { useState } from "react";

const ManipulatingArrays = () => {
  const [languages, setLanguages] = useState(["Javascript", "Python"]);

  const [newInput, setNewInput] = useState("");

  const changeHandler = (e) => {
    // console.log(e.target.value)
    setNewInput(e.target.value); // I am updating the newInput state
  };

  const addLanguage = () => {
    // console.log(newInput)
    setLanguages([...languages, newInput]);

    setNewInput("");
  };

  const deleteElement = (element) => {
    // console.log(element);

    // Update my array and remove the element that is clicked
    const filteredArray = languages.filter((item) => item !== element);

    // Update with using the index
    // const filteredArray = languages.filter((item , index) => index !== i);
    console.log(filteredArray);
    setLanguages(filteredArray);
  };

  return (
    <div>
      <h1> ManipulatingArrays </h1>

     {languages.length > 0 &&  <ul>
        <h2>Programming Languages</h2>
        {languages.map((item, i) => {
          return (
            <li key={i}>
              {item} <button onClick={() => deleteElement(item)}>X</button>
            </li>
          );
        })}
      </ul> }

      <h3>Add a new language</h3>

      <input
        type="text"
        value={newInput}
        placeholder="language"
        onChange={changeHandler}
      />
      <input type="button" value="Add" onClick={addLanguage} />
      <hr />
    </div>
  );
};

export default ManipulatingArrays;
