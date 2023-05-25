import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import Label from "@/atoms/Label";
const Nav = ({ navLinks }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavLink = (route) => {
    navigate(route);
  };
  return (
    <div className="flex ml-2 ">
      {navLinks.map((item) => (
        <div
          className={classNames(
            "ml-6 py-4 cursor-pointer",
            location.pathname === item.route && "border-b-4 border-blue-500"
          )}
          onClick={() => {
            handleNavLink(item.route);
          }}
          key={item.id}
        >
          <Label
            content={item.label}
            value={item.route}
            color="text-slate-700"
          />
        </div>
      ))}
    </div>
  );
};

Nav.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      route: PropTypes.string,
    })
  ),
};

export default Nav;
