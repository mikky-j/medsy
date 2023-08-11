import { NavContext } from "../Index";
import { useContext } from "react";
import Input from "../../components/SideNav/CheckoutNav/Input";
import NavHeader from "../../components/SideNav/NavHeader";
import TextArea from "../../components/SideNav/CheckoutNav/TextArea";
import NavFooter from "../../components/SideNav/NavFooter";
import NavBody from "../../components/SideNav/NavBody";

const CheckoutNav = () => {
  const { openRoute } = useContext(NavContext);

  return (
    <div className="flex flex-col h-full">
      <NavHeader title="Checkout" onBack={() => openRoute("Cart")} />
      <NavBody>
        <div className="grid gap-y-3 mt-6 mb-8">
          <p className="label text-lg font-semibold">Contact Information</p>
          <Input type="text" placeholder="Phone Number" />
          <Input type="email" placeholder="Email Address" />
        </div>
        <div className="grid gap-y-3 gap-x-3 mt-16">
          <p className="label text-lg font-semibold">Shipping Address</p>
          <Input type="text" placeholder="Full Name" />
          <TextArea
            type="text"
            className="h-[100px]"
            placeholder="Enter Address"
          />
          <div className="flex">
            <Input type="text" className="me-4" placeholder="City" />
            <Input type="text" placeholder="Apartment, Suite, etc" />
          </div>
        </div>
      </NavBody>
      <NavFooter>
        <button
          onClick={() => {
            openRoute("Finalize");
          }}
          className="w-full rounded-sm text-white text-sm uppercase bg-gray-900 py-3 text-center border-none"
        >
          Confirm
        </button>
      </NavFooter>
    </div>
  );
};

export default CheckoutNav;
