import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({
  type,
  content,
  disable,
  onClick,
  preFix: PreFix,
  postFix: PostFix,
}) => {
  return (
    <button
      className={classNames(
        disable && "text-gray-400 bg-transparent",
        type === "secondary" && "text-blue-500 bg-transparent",
        (type === "primary" || type === "submit") &&
          "bg-blue-500 px-4 text-white",
        "w-full rounded pb-2.5 pt-2.5 flex justify-center items-center px-4"
      )}
      type={type}
      onClick={onClick}
      disabled={disable}
    >
      {PreFix && (
        <span className="mr-4">
          <PreFix />
        </span>
      )}
      {content}
      {PostFix && (
        <span className="ml-4">
          <PostFix />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  preFix: PropTypes.func,
  postFix: PropTypes.func,
};

export default Button;
