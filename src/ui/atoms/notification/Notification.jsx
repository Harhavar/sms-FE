import React from "react";
import { FaBell } from "react-icons/fa";
import PropTypes from "prop-types";
const Notification = ({ onClick, count }) => {
  return (
    <span className="mr-6 mb-1 relative">
      <FaBell
        className="text-slate-700 cursor-pointer mt-1"
        onClick={onClick}
        size={25}
      />
      {count > 0 && (
        <span className="text-white bg-red-600 text-center rounded-s-2xl rounded-e-2xl absolute w-8 text-sm left-2.5 top-px">
          {count > 9 ? "9" : count}
          {count > 9 && "+"}
        </span>
      )}
    </span>
  );
};
Notification.propTypes = {
  onClick: PropTypes.func,
  count: PropTypes.string,
};

export default Notification;
