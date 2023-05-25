import { Formik, Form as FormikForm } from "formik";
import PropTypes from "prop-types";
import AutenticationFieldGroup from "@/molecules/autentication-field-group";
import Button from "@/molecules/button";
import FormFooter from "@/molecules/form-footer";

const AuthenticationForm = ({
  title,
  subTitle,
  fields,
  onSubmit,
  buttonText,
  isForgotPasswordEnabled,
  onForgotPasswordClick,
  validationSchema,
  successMessage,
  content,
  isSignUp,
}) => {
  const initialValuesGenerator = () => {
    let initialValues = {};
    for (let i in fields) {
      initialValues[`${fields[i].name}`] = "";
    }
    return initialValues;
  };

  const handleSignUp = () => {
    console.log("click on Sign Up button");
  };

  return (
    <div className="p-8 mt-8 w-fit m-auto bg-white min-w-[25%]">
      <div className="text-center font-bold text-xl leading-7">{title}</div>
      <div className="text-center text-sm font-normal leading-5 mt-2 mb-5">
        {subTitle}
      </div>
      <Formik
        initialValues={initialValuesGenerator()}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <FormikForm>
            {fields.map((field) => {
              return (
                <AutenticationFieldGroup
                  key={field.key}
                  id={field.id}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.inputType}
                  isForgotPasswordEnabled={isForgotPasswordEnabled}
                  onForgotPasswordClick={onForgotPasswordClick}
                  error={errors[`${field.name}`]}
                  touched={touched[`${field.name}`]}
                  isDetailedPasswordValidationEnabled={
                    field?.isDetailedPasswordValidationEnabled
                  }
                />
              );
            })}
            {successMessage && <span>{successMessage}</span>}
            <span className="mt-5 block">
              <Button type={"submit"} content={buttonText} disable={false} />
            </span>
          </FormikForm>
        )}
      </Formik>
      {isSignUp && (
        <FormFooter
          onClick={handleSignUp}
          content={content}
          btnText="Sign Up"
        />
      )}
    </div>
  );
};

AuthenticationForm.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
  isForgotPasswordEnabled: PropTypes.bool,
  onForgotPasswordClick: PropTypes.func,
  successMessage: PropTypes.string,
  content: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      id: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string,
      inputType: PropTypes.string,
    })
  ),
};

export default AuthenticationForm;
