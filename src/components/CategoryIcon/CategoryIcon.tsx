import Icon from '../Icon/Icon';
import insertCategoryIcon from '../../utils/insertCategoryIcon';

interface IProps {
  category: string;
}

const CategoryIcon = ({ category }: IProps) => {
  return (
    <div className="flex p-[10px] items-center justify-center shrink-0 grow-0 basis-auto w-10 fill-white bg-neutral-700 rounded-full">
      <Icon href={insertCategoryIcon(category)} />
    </div>
  );
};

export default CategoryIcon;
