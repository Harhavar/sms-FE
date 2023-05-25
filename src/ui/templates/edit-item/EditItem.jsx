import SecondaryHeader from "@/organisms/secondary-header";
import Heading from "@/organisms/heading";
import Form from "@/organisms/form";

const EditItem = ({
  title,
  subTitle,
  formHeading,
  fields,
  onSubmit,
  buttonText,
  initialValues,
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
        initialValues={initialValues}
      />
    </>
  );
};

export default EditItem;
