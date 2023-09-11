import { useMemo, useState } from "react";
import Child from "./child";

function Parent() {
  const [num, setNum] = useState(0);
  const getChild = useMemo(() => <Child />, []);
  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>click me</button>
      {/* <Child /> */}
      {getChild}
    </>
  );
}

export default Parent;
