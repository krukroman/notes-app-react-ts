interface IProps {
  href: string;
}

const Icon = ({ href }: IProps) => {
  return (
    <svg className="h-5 w-5" width="20" height="20">
      <use href={href}></use>
    </svg>
  );
};

export default Icon;
