import { useState } from "react";

function SearchingHeader({ search }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label className="searchLabel"> Buradan Arama Yapabilirsin  </label>
        <input value={value} onChange={handleChange} />
      
      </form>
    </div>
  );
}

export default SearchingHeader;
