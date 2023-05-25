import HeadingMolecule from "@/molecules/heading";
import Button from "@/molecules/button";
const Heading = ({
  title,
  subTitle,
  buttonContent,
  preFix,
  postfix,
  disable,
  headingButtonClick,
}) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-end">
        <HeadingMolecule title={title} subTitle={subTitle} />
        {buttonContent && (
          <div className="w-60">
            <Button
              type="primary"
              content={buttonContent}
              preFix={preFix}
              postfix={postfix}
              disable={disable}
              onClick={headingButtonClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Heading;
