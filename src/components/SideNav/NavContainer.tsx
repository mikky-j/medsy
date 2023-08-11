import React, { useContext } from "react";
import { NavContext } from "../../pages/Index";

interface NavContainerProps {
  children: React.ReactNode;
}

const NavContainer = ({ children }: NavContainerProps) => {
  const {
    navState: { open },
  } = useContext(NavContext);

  return (
    <div
      className={`nav-container overflow-x-hidden h-full max-w-[450px] bg-white transition-all duration-500 z-10 ${
        open ? "w-full" : "w-0"
      }`}
    >
      {children}
    </div>
  );
};

export default NavContainer;
