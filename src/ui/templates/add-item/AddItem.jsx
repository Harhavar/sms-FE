import SecondaryHeader from "@/organisms/secondary-header";
import Heading from "@/organisms/heading";
import Form from "@/organisms/form";

const AddItem = ({
  title,
  subTitle,
  formHeading,
  fields,
  onSubmit,
  buttonText,
  validationSchema,
  fieldArray,
}) => {
  return (
    <>
      <SecondaryHeader />
      <Heading title={title} subTitle={subTitle} />
      <Form
        formHeading={formHeading}
        fields={fields}
        onSubmit={onSubmit}
        buttonText={buttonText}
        validationSchema={validationSchema}
        fieldArray={fieldArray}
      />
    </>
  );
};

export default AddItem;
