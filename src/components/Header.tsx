import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./header/SearchBar";
import PhoneNumber from "./header/PhoneNumber";
import Cart from "./header/Cart";
import { useContext } from "react";
import { NavContext } from "../pages/Index";
import Icon from "./General/Icon";
const Header = () => {
  const { openRoute } = useContext(NavContext);
  return (
    <header className="w-full bg-white z-40 flex items-center sticky top-0 py-6 px-8 shadow-md">
      <div className="me-4 lg:me-12 flex items-center">
        <RxHamburgerMenu
          className="lg:mr-4 mr-0 hover:cursor-pointer"
          size={25}
          onClick={() => {
            openRoute("Home");
          }}
        />
        <Icon className="hidden md:block" />
      </div>
      <div className="flex-grow">
        <SearchBar />
      </div>
      <div className="right flex items-center ms-4 lg:ms-12">
        <PhoneNumber className="font-bold text-sm me-4 hidden lg:block" />
        <Cart onClick={() => openRoute("Cart")} />
      </div>
    </header>
  );
};

export default Header;
