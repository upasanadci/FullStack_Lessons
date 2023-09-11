import { useCallback, useMemo, useState } from "react";

function AddValue() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [addValue, setAddValue] = useState(0);

  const handleValue1 = () => {
    setA(a + 1);
    console.log("a value is:", a);
  };

  const handleValue2 = () => {
    setB(b + 1);
    console.log("b value is:", b);
  };
  //useMemo hook always return a value
  const memory = useMemo(() => {
    setAddValue(a + b);
  }, [a]);

  //   const handleOnAdd = useCallback(() => {
  //     setAddValue(a + b);
  //   }, [b]);

  return (
    <>
      <h1>Addtion of two values</h1>
      <button onClick={handleValue1}>value {a}</button>
      <button onClick={handleValue2}>value {b}</button>
      {/* <button onClick={handleOnAdd}>Add</button> */}
      <div>{addValue}</div>
    </>
  );
}

export default AddValue;
