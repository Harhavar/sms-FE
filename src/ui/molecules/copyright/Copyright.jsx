import Label from "@/atoms/Label";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <span className="text-slate-400">
        <Label
          content={`© Copyright ${year} | Euphoric Thought Technologies Pvt. Ltd.`}
          color="text-slate-400"
        />
      </span>
    </div>
  );
};

export default Copyright;
