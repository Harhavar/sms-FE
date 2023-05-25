import { useState } from "react";
import classNames from "classnames";

import Input from "@/atoms/input";
import Label from "@/atoms/Label";
import PropTypes from "prop-types";

const AutenticationFieldGroup = ({
  label,
  id,
  name,
  placeholder,
  type,
  isForgotPasswordEnabled,
  onForgotPasswordClick,
  error,
  touched,
  isDetailedPasswordValidationEnabled,
}) => {
  const [validations, setValidations] = useState({
    hasMinimumCharacters: false,
    hasSpecialCharacter: false,
    hasUpperCaseCharacter: false,
    hasLowerCaseCharacter: false,
    hasNumericDigit: false,
  });
  const validateField = (value) => {
    if (value.length >= 8) {
      setValidations((prevState) => {
        return { ...prevState, hasMinimumCharacters: true };
      });
    } else {
      setValidations((prevState) => {
        return { ...prevState, hasMinimumCharacters: false };
      });
    }

    if (value.match(/[!|@|#|$|%|^|&|\*|(|)|_|-|=|\+]/)) {
      setValidations((prevState) => {
        return { ...prevState, hasSpecialCharacter: true };
      });
    } else {
      setValidations((prevState) => {
        return { ...prevState, hasSpecialCharacter: false };
      });
    }

    if (value.match(/[A-Z]/)) {
      setValidations((prevState) => {
        return { ...prevState, hasUpperCaseCharacter: true };
      });
    } else {
      setValidations((prevState) => {
        return { ...prevState, hasUpperCaseCharacter: false };
      });
    }

    if (value.match(/[a-z]/)) {
      setValidations((prevState) => {
        return { ...prevState, hasLowerCaseCharacter: true };
      });
    } else {
      setValidations((prevState) => {
        return { ...prevState, hasLowerCaseCharacter: false };
      });
    }

    if (value.match(/[0-9]/)) {
      setValidations((prevState) => {
        return { ...prevState, hasNumericDigit: true };
      });
    } else {
      setValidations((prevState) => {
        return { ...prevState, hasNumericDigit: false };
      });
    }
  };
  return (
    <>
      <Label content={label} />
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        validateField={isDetailedPasswordValidationEnabled && validateField}
      />
      {error && touched && (
        <p className="text-sm font-normal text-red-600">{error}</p>
      )}
      {isDetailedPasswordValidationEnabled && (
        <ul>
          <li
            className={classNames(
              validations.hasMinimumCharacters && "text-lime-500"
            )}
          >
            Minimum 8 characters
          </li>
          <li
            className={classNames(
              validations.hasSpecialCharacter && "text-lime-500"
            )}
          >
            At least 1 special character (e.g. @, ! , # , $ , %, etc.)
          </li>
          <li
            className={classNames(
              validations.hasUpperCaseCharacter && "text-lime-500"
            )}
          >
            At least 1 Upper case character
          </li>
          <li
            className={classNames(
              validations.hasLowerCaseCharacter && "text-lime-500"
            )}
          >
            At least 1 Lower case character
          </li>
          <li
            className={classNames(
              validations.hasNumericDigit && "text-lime-500"
            )}
          >
            At least 1 Numeric digit
          </li>
        </ul>
      )}
      {type === "password" && isForgotPasswordEnabled && (
        <div className="text-end mt-3">
          <Label
            content="Forgot Password?"
            color="text-blue-500"
            onClick={onForgotPasswordClick}
          />
        </div>
      )}
    </>
  );
};

AutenticationFieldGroup.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isForgotPasswordEnabled: PropTypes.bool,
  onForgotPasswordClick: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  isDetailedPasswordValidationEnabled: PropTypes.bool,
};

export default AutenticationFieldGroup;
