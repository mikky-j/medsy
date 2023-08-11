import { NavContext } from "../../pages/Index";
import { useContext } from "react";
import HomeNav from "../../pages/SideNavs/HomeNav";
import NavContainer from "../SideNav/NavContainer";
import NavOutside from "../SideNav/NavOutside";
import ProductNav from "../../pages/SideNavs/ProductNav";
import CartNav from "../../pages/SideNavs/CartNav";
import CheckoutNav from "../../pages/SideNavs/CheckoutNav";
import { Routes } from "../../types/navTypes";
import UnIdentifiedNav from "../../pages/SideNavs/UnIdentifiedNav";
import FinalizedCheckoutNav from "../../pages/SideNavs/FinalizedCheckout";

const getComponent = (route: Routes) => {
  switch (route.name) {
    case "Home":
      return <HomeNav />;
    case "Product":
      return <ProductNav product={route.params!.product} />;
    case "Cart":
      return <CartNav />;
    case "Checkout":
      return <CheckoutNav />;
    case "Finalize":
      return <FinalizedCheckoutNav />;
    default:
      return <UnIdentifiedNav />;
  }
};

const SideNav = () => {
  const {
    navState: { direction, route, open },
  } = useContext(NavContext);

  return (
    <div
      className={`fixed top-0 w-screen ${
        direction === "left" ? "left-0" : "right-0"
      } h-screen z-50 flex ${open ? "visible" : "invisible"}`}
    >
      {direction == "right" ? <NavOutside /> : null}
      <NavContainer>{getComponent(route)}</NavContainer>
      {direction == "left" ? <NavOutside /> : null}
    </div>
  );
};

export default SideNav;
