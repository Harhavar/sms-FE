import classNames from "classnames";

const Chip = ({ color, content, backgroundColor }) => {
  return (
    <button
      className={classNames(
        "py-1 px-1 rounded",
        `${backgroundColor}`,
        `${color}`
      )}
    >
      {content}
    </button>
  );
};

export default Chip;
