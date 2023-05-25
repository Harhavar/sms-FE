import Label from "@/atoms/Label";

const Heading = ({ headingPath, title, subTitle }) => {
  return (
    <div className="container mx-auto mt-9">
      {headingPath && (
        <Label content={headingPath} size="xs" color="text-slate-600" />
      )}
      <Label content={title} size="xxl" />
      <Label content={subTitle} size="md" color="text-slate-500" />
    </div>
  );
};
export default Heading;
