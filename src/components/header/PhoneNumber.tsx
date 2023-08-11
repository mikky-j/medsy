import { FiPhoneCall } from "react-icons/fi";
interface PhoneNumberProps {
  className?: string;
}
const PhoneNumber = ({ className }: PhoneNumberProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <FiPhoneCall className="inline" />
      <p className="ms-0 lg:ms-1 inline">+234 123-4567-890</p>
    </div>
  );
};

export default PhoneNumber;
