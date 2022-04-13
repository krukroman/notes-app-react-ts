interface IProps {
  children: React.ReactNode;
}

const TableBody = ({ children }: IProps) => {
  return <ul>{children}</ul>;
};

export default TableBody;
