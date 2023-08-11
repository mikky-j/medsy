import { NavContext } from "../Index";
import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import Icon from "../../components/General/Icon";

const HomeNav = () => {
  const { closeNav } = useContext(NavContext);
  return (
    <>
      <div className="header py-7 flex items-center px-8 bg-gray-50 w-full">
        <Icon className="ms-8" />
        <GrClose
          className="ms-auto hover:cursor-pointer"
          onClick={closeNav}
          size={20}
        />
      </div>
      <div className="list"></div>
    </>
  );
};

export default HomeNav;
