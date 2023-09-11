import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheck,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const DisplayTodos = ({ todos, setTodos }) => {
  // {id : 0 , title : "" , done : false}

  const deleteHandler = (id) => {
    // delete the specific todo
    const filteredArray = todos.filter((item) => item.id !== id);
    setTodos(filteredArray);
  };

  const updateHandler = (id) => {
    const updatedArray = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    // setTodos(updatedArray);
    // console.log(updatedArray)

     const sortEd = updatedArray.sort((a, b) => {
       return a.done - b.done; // true || false =>  false goes before true
     });
     console.log(sortEd);
     setTodos(sortEd);
  };

  return (
    <>
      <h2>To dos</h2>
      <ul className="todos">
        {todos.map((item, i) => {
          return (
            <li
              key={i}
              className={!item.done ? "todo-item" : "todo-item todones-item"}
            >
              <p>
                {i + 1}. {item.title}{" "}
              </p>
              <div className="action">
                <button className="btn" onClick={() => deleteHandler(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />{" "}
                </button>

                <button className="btn" onClick={() => updateHandler(item.id)}>
                  <FontAwesomeIcon icon={!item.done ? faCheck : faRotateLeft} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DisplayTodos;
