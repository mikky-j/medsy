import { NavContext } from "../Index";
import { useContext } from "react";
import { useAppSelector } from "../../redux/hooks";
import CartItem from "../../components/SideNav/CartNav/CartItem";
import NavHeader from "../../components/SideNav/NavHeader";
import NavBody from "../../components/SideNav/NavBody";
import NavFooter from "../../components/SideNav/NavFooter";

const CartNav = () => {
  const { closeNav, openRoute } = useContext(NavContext);
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="flex flex-col h-full relative ">
      <NavHeader
        className="px-6 border-b capitalize"
        title={
          cart.products.length === 0
            ? "No Items in your basket"
            : "Your Products"
        }
        onBack={closeNav}
      />
      <NavBody className="px-6">
        {/* <div className="nav-body mx-3 my-2 flex-grow overflow-y-scroll px-6"> */}
        {cart.products.length == 0 ? (
          <div className="m-10 text-center leading-6">
            You haven't added anything in your cart yet. Start adding the
            products you like.
          </div>
        ) : (
          cart.products.map((product) => {
            return <CartItem product={product} />;
          })
        )}
        {/* </div> */}
      </NavBody>

      <NavFooter>
        <div className="mb-4 flex justify-between items-center text-sm">
          <p className="font-semibold">
            Subtotal
            <span className="ml-2 text-gray-500 font-normal">
              {"(incl. VAT)"}
            </span>
          </p>
          <p className="text-xl font-semibold">₦{cart.total.toFixed(2)} </p>
        </div>
        <button
          onClick={() => openRoute("Checkout")}
          disabled={cart.products.length === 0}
          className="w-full text-white text-sm uppercase bg-gray-900 py-3 text-center border-none disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
          Confirm
        </button>
      </NavFooter>
    </div>
  );
};

export default CartNav;
