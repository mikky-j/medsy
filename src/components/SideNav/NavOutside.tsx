import { useContext } from "react";
import { NavContext } from "../../pages/Index";

const NavOutside = () => {
  const { closeNav } = useContext(NavContext);
  return (
    <div
      className="flex-grow hover:cursor-pointer bg-black/10 h-full"
      onClick={closeNav}
    />
  );
};

export default NavOutside;
