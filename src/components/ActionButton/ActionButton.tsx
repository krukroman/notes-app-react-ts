import s from './ActionButton.module.scss';

import Icon from '../Icon/Icon';

interface IProps {
  pathToIcon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ActionButton = ({ pathToIcon, onClick }: IProps) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      <Icon href={pathToIcon} />
    </button>
  );
};

export default ActionButton;
