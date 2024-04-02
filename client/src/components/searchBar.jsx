import React, {useState} from "react";

const SearchBar = ({ handleSearch }) => {
    return (
      <div className="">
        <input
          className="rounded text-base w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-white"
          type="text"
          placeholder="Search for operators..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    );
  };
  
  export default SearchBar;