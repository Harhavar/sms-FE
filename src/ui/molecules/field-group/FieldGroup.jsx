import Input from "@/atoms/input";
import Label from "@/atoms/Label";

const FieldGroup = ({
  label,
  id,
  name,
  placeholder,
  type,
  error,
  touched,
  options,
}) => {
  return (
    <div className="py-7 border-b">
      <div className=" flex items-center justify-between ">
        <span className="w-1/2">
          <Label content={label} />
        </span>
        <span className="w-1/2">
          <Input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            validateField={null}
            options={options}
          />
        </span>
      </div>
      {error && touched && (
        <p className="text-sm font-normal text-red-600 float-right">{error}</p>
      )}
    </div>
  );
};

export default FieldGroup;
