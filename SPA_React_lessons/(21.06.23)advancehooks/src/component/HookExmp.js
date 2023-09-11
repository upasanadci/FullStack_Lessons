import { useCallback, useState } from "react";

function HookExmp() {
  const [x, xSetMulti] = useState(1);
  const [y, ySetMulti] = useState(1);
  const [multi, setMulti] = useState(1);

  const handleOnMultix = () => {
    xSetMulti(x * 2);
  };

  const handleOnMultiy = () => {
    ySetMulti(y * 2);
  };

  const handleonMulti = useCallback(() => {
    setMulti(x * y);
  }, [y]);
  return (
    <>
      <h1>useCallBack</h1>
      <button onClick={handleOnMultix}>Value {x}</button>
      <button onClick={handleOnMultiy}>Value {y}</button>
      <button onClick={handleonMulti}>Multiplication</button>
      <div>{multi}</div>
    </>
  );
}

export default HookExmp;
