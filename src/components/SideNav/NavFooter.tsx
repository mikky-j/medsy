import React from "react";

interface NavFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const NavFooter = ({ className, children }: NavFooterProps) => {
  return (
    <footer
      className={`sticky bottom-0 bg-white py-7 px-6 shadow-inner ${className}`}
    >
      {children}
    </footer>
  );
};

export default NavFooter;
