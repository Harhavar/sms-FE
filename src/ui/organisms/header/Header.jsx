import React from "react";
import PropTypes from "prop-types";
import { useSignOut } from "react-auth-kit";

import Logo from "@/atoms/logo";
import Nav from "@/molecules/nav";
import SearchBar from "@/atoms/searchBar";
import Dropdown from "@/molecules/dropdown";
import Notification from "@/atoms/notification";

const Header = ({ navLinks, userDropdown, dropDownLabel }) => {
  const signOut = useSignOut();
  const handleSearch = () => {
    console.log("User Search this text");
  };
  const userDropdownClick = (e) => {
    if (e.target.value === "logout") {
      signOut();
    }
  };
  const handleNotification = () => {
    console.log("handle Notifications");
  };
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="mb-1">
              <Logo />
            </span>
            <Nav navLinks={navLinks} />
          </div>
          <div className="flex items-center">
            {/* <SearchBar onChange={handleSearch} placeHolder="Search..." /> */}
            <Notification count="10" onClick={handleNotification} />
            <Dropdown
              dropdownValues={userDropdown}
              content={dropDownLabel}
              onClick={userDropdownClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      route: PropTypes.string,
    })
  ),
  userDropdown: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default Header;
