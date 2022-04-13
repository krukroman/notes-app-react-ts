import s from './ModalWindow.module.scss';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}

const portal = document.getElementById('portal');

const ModalWindow = ({ children, onClose }: IProps) => {
  useEffect(() => {
    const onEscPress = (e: KeyboardEvent) => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { currentTarget, target } = e;
    if (target === currentTarget) onClose();
  };

  return (
    portal &&
    createPortal(
      <div id="backdrop" className={s.backdrop} onClick={onBackdropClick}>
        <div className={s.modal}>{children}</div>
      </div>,
      portal
    )
  );
};

export default ModalWindow;
