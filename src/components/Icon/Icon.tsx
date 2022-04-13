interface IProps {
  href: string;
}

const Icon = ({ href }: IProps) => {
  return (
    <svg width="20" height="20">
      <use href={href}></use>
    </svg>
  );
};

export default Icon;
