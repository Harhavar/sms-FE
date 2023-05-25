import Label from "@/atoms/Label";
import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";

const FormFooter = ({ onClick, content, btnText, resendMessage }) => {
  return (
    <div>
      <span className="text-slate-400 text-center mt-5 block text-xs font-medium">
        <Label content={content} />
      </span>
      <span className="text-center">
        <Label
          content={btnText}
          onClick={onClick}
          color="text-blue-500"
          size="sm"
        />
      </span>
      {resendMessage && (
        <div className="flex items-center justify-center">
          <FaRegCheckCircle className="mr-3 text-green-500" />
          <span className="text-green-500">{resendMessage}</span>
        </div>
      )}
    </div>
  );
};

FormFooter.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.string,
  btnText: PropTypes.string,
};

export default FormFooter;
