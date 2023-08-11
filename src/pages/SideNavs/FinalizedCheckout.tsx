import { useContext } from "react";
import NavHeader from "../../components/SideNav/NavHeader";
import { NavContext } from "../Index";
import NavBody from "../../components/SideNav/NavBody";
import NavFooter from "../../components/SideNav/NavFooter";
import { BsCheckCircleFill } from "react-icons/bs";

const FinalizedCheckoutNav = () => {
  const { closeNav } = useContext(NavContext);
  return (
    <div className="flex flex-col pt-4 px-6 h-full">
      <NavHeader title=" " onBack={closeNav} />
      <NavBody className="flex justify-center text-center mx-auto w-3/4 items-center flex-col">
        <div className="text-xl flex flex-col justify-center items-center font-semibold mb-4">
          <BsCheckCircleFill className="text-teal-600 mb-2" size={50} />
          <p>Order Confirmation</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold ">Thank You for your order</p>
          <p className="text-gray-500 text-sm">
            We have recieved your order and we will contact you soon.
          </p>
        </div>
      </NavBody>
      <NavFooter></NavFooter>
    </div>
  );
};

export default FinalizedCheckoutNav;
