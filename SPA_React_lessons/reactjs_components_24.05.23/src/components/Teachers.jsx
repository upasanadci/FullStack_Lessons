import React from "react";

const Teachers = (props) => {
  console.log("teachers props", props.teachers);
  return (
    <div>
      <ul style={{listStyle: "none"}}>
        {props.teachers.map((item, index) => {
          return (
            <li style={{margin:"10px", fontSize:"1.5rem"}} key={index}>
              teacher{index + 1}. {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Teachers;
