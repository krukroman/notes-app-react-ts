import s from './TableCell.module.scss';

interface IProps {
  text: string | number;
}

const TableCell = ({ text }: IProps) => {
  return (
    <div className={s.container}>
      <p>{text}</p>
    </div>
  );
};

export default TableCell;
