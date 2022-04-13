import s from './Button.module.scss';
interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  className?: string;
}

const Button = ({ type, onClick, text, className }: IProps) => {
  return (
    <button className={className ? `${s.button} ${className}` : s.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
