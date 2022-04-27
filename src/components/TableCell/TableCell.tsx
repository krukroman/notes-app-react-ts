interface IProps {
  className?: string;
  text: string | number;
}

const TableCell = ({ className, text }: IProps) => {
  return (
    <div className="px-1 grow basis-full break-all">
      <p className={className && className}>{text}</p>
    </div>
  );
};

export default TableCell;
