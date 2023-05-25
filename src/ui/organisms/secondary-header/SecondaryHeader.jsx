import { useNavigate } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa";

import Button from "@/molecules/button";

const SecondaryHeader = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-white py-3">
      <div className="container mx-auto">
        <div className="w-0">
          <Button
            content="Back"
            onClick={handleBack}
            preFix={FaAngleLeft}
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
