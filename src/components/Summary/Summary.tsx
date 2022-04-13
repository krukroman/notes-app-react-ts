import ISummary from '../../interfaces/Summary.interface';
import TableCell from '../TableCell/TableCell';

interface IProps {
  summary: ISummary;
}

const Summary = ({ summary }: IProps) => {
  return (
    <>
      <TableCell text={summary.category} />
      <TableCell text={summary.active} />
      <TableCell text={summary.archived} />
    </>
  );
};

export default Summary;
