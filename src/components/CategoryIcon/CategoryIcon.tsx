import s from './CategoryIcon.module.scss';
import Icon from '../Icon/Icon';
import insertCategoryIcon from '../../utils/insertCategoryIcon';

interface IProps {
  category: string;
}

const CategoryIcon = ({ category }: IProps) => {
  return (
    <div className={s.container}>
      <Icon href={insertCategoryIcon(category)} />
    </div>
  );
};

export default CategoryIcon;
