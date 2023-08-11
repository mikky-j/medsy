import { NavContext } from "../Index";
import { useContext } from "react";
import Input from "../../components/SideNav/CheckoutNav/Input";
import NavHeader from "../../components/SideNav/NavHeader";
import TextArea from "../../components/SideNav/CheckoutNav/TextArea";

const CheckoutNav = () => {
  const { openRoute } = useContext(NavContext);

  return (
    <div className="flex flex-col px-6 h-full">
      <NavHeader title="Checkout" onBack={() => openRoute("Cart")} />
      <div className="flex-grow">
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
      </div>
      <footer className="sticky bg-white bottom-0 py-5 px-6 shadow-inner">
        <button
          onClick={() => {}}
          className="w-full rounded-sm text-white text-sm uppercase bg-gray-900 py-3 text-center border-none"
        >
          Confirm
        </button>
      </footer>
    </div>
  );
};

export default CheckoutNav;
