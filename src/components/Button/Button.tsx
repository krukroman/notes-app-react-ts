interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  className?: string;
}

const buttonStyle =
  'block py-1 px-2 border border-solid border-zinc-800 rounded w-max bg-slate-100';

const Button = ({ type, onClick, text, className }: IProps) => {
  return (
    <button
      className={className ? `${buttonStyle} ${className}` : buttonStyle}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
