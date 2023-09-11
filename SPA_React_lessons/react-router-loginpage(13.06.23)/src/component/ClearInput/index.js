import { useRef } from "react";
import "./style.css";

function ClearInput() {
  const inputRef = useRef();
  const handleOnClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    console.log(inputRef.current.type);
    console.log(inputRef);
  };
  return (
    <>
      <form>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={handleOnClick}>
          Click me
        </button>
      </form>
    </>
  );
}

export default ClearInput;
