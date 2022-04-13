import s from './Button.module.scss';
interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
}

const Button = ({ type, onClick, text }: IProps) => {
  return (
    <button className={s.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
