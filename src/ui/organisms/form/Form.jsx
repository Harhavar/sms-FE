import { Formik, Form as FormikForm, FieldArray, Field } from "formik";
import PropTypes from "prop-types";
import FieldGroup from "@/molecules/field-group";
import Button from "@/molecules/button";

import { FaTrashAlt, FaPlus } from "react-icons/fa";
import classNames from "classnames";

const Form = ({
  formHeading,
  fields,
  initialValues,
  onSubmit,
  buttonText,
  validationSchema,
  fieldArray,
}) => {
  const initialValuesGenerator = () => {
    let initialValues = {};
    for (let i in fields) {
      initialValues[`${fields[i].name}`] = "";
    }
    if (fieldArray && fieldArray.length > 0) {
      return {
        ...initialValues,
        userShift: [
          {
            shiftId: "",
            userId: "",
          },
        ],
      };
    }
    return initialValues;
  };
  return (
    <div className="bg-white container px-7 py-5 mx-auto mt-11">
      <div className="border-b pb-5 font-semibold">{formHeading}</div>
      <Formik
        initialValues={initialValues ?? initialValuesGenerator()}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ errors, touched, values }) => (
          <FormikForm>
            {fields.map((field) => {
              return (
                <FieldGroup
                  key={field.key}
                  id={field.id}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.inputType}
                  options={field.options}
                  error={errors[`${field.name}`]}
                  touched={touched[`${field.name}`]}
                />
              );
            })}
            {fieldArray && (
              <FieldArray name="userShift">
                {({ insert, remove, push }) => (
                  <>
                    {values.userShift.map((field, index) => (
                      <div className="pt-7 flex grow items-center" key={index}>
                        <Field
                          className="focus:outline-none w-full mr-8 border-2 focus-within:ring-4 focus-within:ring-blue-300 border-gray-300 rounded pt-2.5 pb-2.5 pl-3"
                          name={`userShift.${index}.userId`}
                          placeholder="Select User"
                          type="text"
                        />
                        <Field
                          className="focus:outline-none w-full border-2 focus-within:ring-4 focus-within:ring-blue-300 border-gray-300 rounded pt-2.5 pb-2.5 pl-3"
                          name={`userShift.${index}.shiftId`}
                          placeholder="Select Shift"
                          type="text"
                        />
                        <span className="w-10 mx-4 slate-400">
                          <Button
                            type={"button"}
                            preFix={FaTrashAlt}
                            onClick={() => remove(index)}
                          />
                        </span>
                        <span
                          className={classNames(
                            "w-10 slate-400",
                            index !== 0 && "invisible"
                          )}
                        >
                          <Button
                            type={"button"}
                            preFix={FaPlus}
                            onClick={() => push({ userId: "", shiftId: "" })}
                          />
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </FieldArray>
            )}
            <span className="flex w-fit pt-6">
              <Button type={"submit"} content={buttonText} />
            </span>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
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

export default Form;
