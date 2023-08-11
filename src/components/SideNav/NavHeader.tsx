import { BsArrowLeft } from "react-icons/bs";

interface NavHeaderProps {
  title: string;
  onBack?: VoidFunction;
  className?: string;
}

const NavHeader = ({ title, onBack, className = "" }: NavHeaderProps) => {
  return (
    <header className={`p-6 sticky top-0 bg-white ${className}`}>
      <div className="relative flex justify-center items-center">
        <BsArrowLeft
          size={23}
          className=" absolute top-1/2 -translate-y-1/2 left-0 text-slate-400 hover:cursor-pointer"
          onClick={onBack}
        />
        <p className="flex-grow text-center font-semibold text-xl">{title}</p>
      </div>
    </header>
  );
  //   return <div>NavHeader</div>;
};

export default NavHeader;
