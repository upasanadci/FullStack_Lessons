import { memo } from "react";
//React.memo()

function Child() {
  console.log("child component re-rendered");
  return (
    <>
      <h1>Child Component</h1>
    </>
  );
}

//export default memo(Child);
export default Child;
