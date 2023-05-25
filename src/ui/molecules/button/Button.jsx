import AtomicButton from "@/atoms/button";
import PropTypes from "prop-types";

const Button = ({ type, content, disable, onClick, preFix, postFix }) => {
  return (
    <>
      <AtomicButton
        type={type}
        content={content}
        onClick={onClick}
        preFix={preFix}
        postFix={postFix}
        disable={disable}
      />
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  disable: PropTypes.bool,
};

export default Button;
