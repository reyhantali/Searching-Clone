import { useState } from "react";
import searchImages from "./api.jsx";
import "./App.css";
import SearchingHeader from "./SearchingHeader";
import ImageList from "./components/ImageList.jsx";


function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (t) => {
  const result = await searchImages(t);
    setImages(result);
  };
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SearchingHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
