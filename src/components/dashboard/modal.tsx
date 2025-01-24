import ReactDOM from 'react-dom';
import { ModalProps } from '../../types/global';

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg sm:w-96 w-full mx-4 p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
