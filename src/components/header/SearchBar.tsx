import { useState } from "react";
import { GoSearch } from "react-icons/go";
interface SearchBarProps {
  onChange?: (value: string) => void;
}
const SearchBar = ({ onChange }: SearchBarProps) => {
  const [focus, setFocused] = useState(false);
  return (
    <div
      className={`bg-slate-100 flex w-full hover:border-[#ccc] items-center transition-all border-2 rounded-md ${
        focus ? "border-black-important" : "border-transparent"
      } `}
    >
      <div className="icon me-4 ps-4 py-3">
        <GoSearch color={"#999"} />
      </div>
      <input
        type="text"
        placeholder="Search Your Medicine here"
        className={`pe-4 py-3 border-none transition-all h-full flex-grow bg-transparent focus:ring-0 outline-none ${
          focus ? "placeholder-black" : ""
        }`}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default SearchBar;
