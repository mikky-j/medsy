interface StepsProps {
  className?: string;
  index: number;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const Steps = ({
  className,
  index,
  title,
  description,
  bgColor,
  textColor,
}: StepsProps) => {
  return (
    <div className={`flex ${className}`}>
      <div
        className={`max-w-[70px] min-h-[70px] min-w-[70px]  max-h-[70px] flex text-xl justify-center items-center mr-3 rounded-full ${bgColor} ${textColor}`}
      >
        {index}
      </div>
      <div className="flex-grow">
        <p className="text-lg font-semibold mb-2">{title}</p>
        <p className="text-sm leading-6 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Steps;
