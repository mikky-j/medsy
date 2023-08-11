import React from "react";

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

const NavBody = ({ className = "", children }: NavBodyProps) => {
  return (
    <div className={`nav-body px-6 flex-grow overflow-y-auto ${className}`}>
      {children}
    </div>
  );
};

export default NavBody;
