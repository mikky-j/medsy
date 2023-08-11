interface TinyDescriptionBoxProps {
  className?: string;
  label: string;
  value: string;
}

const TinyDescriptionBox = ({
  className = "",
  label,
  value,
}: TinyDescriptionBoxProps) => {
  return (
    <div className={`text-2xs ${className}`}>
      <p className="text-gray-500 font-semibold mb-4">{label}</p>
      <p className="text-xs">{value}</p>
    </div>
  );
};

export default TinyDescriptionBox;
