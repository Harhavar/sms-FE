import Label from "@/atoms/Label";

const FooterLinks = () => {
  const handleTerms = () => {
    console.log("Click on Terms");
  };
  const handlePrivacy = () => {
    console.log("Click on Privacy");
  };
  return (
    <div className="flex">
      <span className="text-slate-400 mr-6">
        <Label
          content="Terms Of Use"
          color="text-slate-400"
          onClick={handleTerms}
        />
      </span>
      <span className="text-slate-400">
        <Label
          content="Privacy Policy"
          color="text-slate-400"
          onClick={handlePrivacy}
        />
      </span>
    </div>
  );
};

export default FooterLinks;
