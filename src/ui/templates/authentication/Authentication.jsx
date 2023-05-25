import Logo from "@/atoms/logo";
import PropTypes from "prop-types";
import AuthenticationForm from "@/organisms/authentication-form";
import Footer from "@/organisms/footer";

const Authentication = ({
  title,
  subTitle,
  fields,
  onSubmit,
  buttonText,
  isForgotPasswordEnabled,
  onForgotPasswordClick,
  validationSchema,
  successMessage,
  isSignUp,
}) => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div className="text-center text-2xl pt-16">
          <Logo />
        </div>
        <div className="grow">
          <AuthenticationForm
            title={title}
            subTitle={subTitle}
            fields={fields}
            onSubmit={onSubmit}
            buttonText={buttonText}
            isForgotPasswordEnabled={isForgotPasswordEnabled}
            onForgotPasswordClick={onForgotPasswordClick}
            validationSchema={validationSchema}
            successMessage={successMessage}
            content="Don’t have an account? Request an account here"
            isSignUp={isSignUp}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

Authentication.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
  isForgotPasswordEnabled: PropTypes.bool,
  onForgotPasswordClick: PropTypes.func,
  successMessage: PropTypes.string,
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

export default Authentication;
