import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ onChange, placeHolder }) => {
  return (
    <div className="border-2 border-slate-300 rounded-md w-72 mr-5 p-1.5 flex items-center">
      <span className="mr-3.5">
        <FaSearch className="text-slate-400" size={20} />
      </span>
      <input
        type="text"
        className="focus:outline-none"
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
};
SearchBar.propTypes = {
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
};

export default SearchBar;
