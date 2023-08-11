interface IconProps {
  className?: string;
}
const Icon = ({ className }: IconProps) => {
  return <div className={`name text-2xl font-bold ${className}`}>Medsy</div>;
};

export default Icon;
