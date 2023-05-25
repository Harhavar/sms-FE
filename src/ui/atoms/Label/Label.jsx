import PropTypes from "prop-types";
import classNames from "classnames";
import { get } from "lodash";

import { sizeMap } from "./sizeMap";

const Label = ({
  content,
  color,
  onClick,
  value,
  preFix: PreFix,
  postFix: PostFix,
  size,
}) => {
  return (
    <span onClick={onClick} className={classNames(get(sizeMap, size))}>
      {PreFix && (
        <span className="mr-2">
          <PreFix />
        </span>
      )}
      <span
        className={classNames(
          "block leading-8",
          `${color}`,
          onClick && "cursor-pointer"
        )}
        value={value}
      >
        {content}
      </span>
      {PostFix && (
        <span className="ml-2">
          <PostFix />
        </span>
      )}
    </span>
  );
};
Label.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  preFix: PropTypes.element,
  postFix: PropTypes.element,
  size: PropTypes.string,
};

Label.defaultProps = {
  color: "text-slate-800",
  size: "md",
};

export default Label;
