import { memo, useState } from "react";
import { Field } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";

const Input = ({ id, name, placeholder, type, validateField, options }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center border-2 border-gray-300 rounded mt-1 focus-within:ring-4 focus-within:ring-blue-300">
      {type !== "select" ? (
        <Field
          className="focus:outline-none w-full pt-2.5 pb-2.5 pl-3"
          id={id}
          name={name}
          placeholder={placeholder}
          type={show ? "text" : type}
          validate={validateField}
        />
      ) : (
        <Field
          className="focus:outline-none w-full py-2.5 px-3 mr-3"
          id={id}
          name={name}
          placeholder={placeholder}
          as={type}
          validate={validateField}
        >
          {options.map((el) => (
            <option key={el.id} value={el.value}>
              {el.label}
            </option>
          ))}
        </Field>
      )}
      {type === "password" && (
        <span onClick={() => setShow(!show)}>
          {show ? (
            <FaRegEyeSlash className="mx-2.5 cursor-pointer" />
          ) : (
            <FaRegEye className="mx-2.5 cursor-pointer" />
          )}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validateField: PropTypes.func,
};

export default memo(Input);
