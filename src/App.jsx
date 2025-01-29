import { useState } from "react";

import "./App.css";
import SearchingHeader from "./SearchingHeader";

function App() {
  const handleSubmit = (t) => {
    console.log(t);
  };
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SearchingHeader search={handleSubmit} />
    </div>
  );
}

export default App;
