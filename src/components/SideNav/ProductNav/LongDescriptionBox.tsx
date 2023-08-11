import { useState } from "react";

interface LongDescriptionBoxProps {
  description: string;
}
const LongDescriptionBox = ({ description }: LongDescriptionBoxProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <p className={`text-sm mb-4 ${showMore ? "block" : "hidden"}`}>
        {description}
      </p>
      <p
        className="font-bold text-2xs hover:cursor-pointer"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Less Details" : "More Details"}
      </p>
    </div>
  );
};

export default LongDescriptionBox;
