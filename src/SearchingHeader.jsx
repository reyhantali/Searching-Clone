import React from "react";

function SearchingHeader({ search }) {
  const handleFormSubmit = () => {
    search("tali");
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label className="searchLabel"> Arama </label>
        <input type="text" />
      </form>
    </div>
  );
}

export default SearchingHeader;
