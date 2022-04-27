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
      <div
        id="backdrop"
        className="py-1 fixed top-0 left-0 overflow-y-auto grid place-items-center w-full h-full bg-gray-300 bg-opacity-60 backdrop-blur-sm"
        onClick={onBackdropClick}
      >
        <div className="mt-3 py-4 px-5 min-w-[50%] bg-white rounded-md shadow-lg">
          {children}
        </div>
      </div>,
      portal
    )
  );
};

export default ModalWindow;
