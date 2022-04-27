import Icon from '../Icon/Icon';

interface IProps {
  header?: boolean;
  pathToIcon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ActionButton = ({ header, pathToIcon, onClick }: IProps) => {
  return (
    <button
      className={`p-1 ${header ? 'fill-white' : 'fill-neutral-600'}`}
      type="button"
      onClick={onClick}
    >
      <Icon href={pathToIcon} />
    </button>
  );
};

export default ActionButton;
