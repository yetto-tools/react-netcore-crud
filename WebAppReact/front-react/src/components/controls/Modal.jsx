import PropTypes from "prop-types";
import { IconClose } from "../../icons/Icon";

const Modal = ({ isOpen, onClose, title, children }) => {
  const close = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <dialog open={isOpen} className="relative z-10">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/55 backdrop-blur-sm"></div>

      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-10">
        <div className="bg-white rounded-sm shadow-lg p-6 min-w-md mx-auto w-auto">
          <div className="w-full text-right relative pb-4 inline-flex pl-4">
            {title && (
              <span className="font-semibold text-2xl w-10/12 truncate">
                {title}
              </span>
            )}
            <button
              onClick={close}
              className="absolute bg-red-600 px-1 py-1 rounded text-white -top-2.5 -right-2.5 inline-flex items-center"
            >
              <IconClose />
            </button>
          </div>
          <section className="w-full">{children || <span></span>}</section>
          <section className="inline-flex justify-around items-center gap-4 w-full hidden">
            {/* <button
              className="mt-4 px-4 py-2 bg-dsPrimary text-white rounded hover:bg-ds-primary-700"
              onClick={close}
            >
              Close
            </button> */}
          </section>
        </div>
      </div>
    </dialog>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
