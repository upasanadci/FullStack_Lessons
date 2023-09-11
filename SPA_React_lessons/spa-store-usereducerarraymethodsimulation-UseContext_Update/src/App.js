import React, { useReducer } from "react";
import ArrayList from "./components/ArrayList";
import Controls from "./components/Controls";

const App = () => {
  return (
    <div>
      <Controls />
      <ArrayList />
    </div>
  );
};

export default App;
