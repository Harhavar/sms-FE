import { colors } from "@/config/theme";
import classNames from "classnames";
import React from "react";

const Logo = () => {
  return (
    <span className={classNames("font-bold", colors.primary)}>ET-Cloudms</span>
  );
};

export default Logo;
