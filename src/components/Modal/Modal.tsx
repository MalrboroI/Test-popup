import React from "react";
import cn from "classnames";
import { useAppContext } from "../../globalContext/Context";
import { ModalProps } from "../GlobalTypes/GlobalTypes";
import CloseBtn from "../Buttons/CloseBtn";

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  const { isModalOpen, setIsModalOpen } = useAppContext();

  const onClose = () => setIsModalOpen(false);

  return (
    <div className={cn("modalWrapper", isModalOpen && "modalWrapper--open")}>
      <div className="mask" onClick={onClose}>
        <div className="modalContainer">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={onClose}>
              <CloseBtn />
            </button>
            <div className="modalTitle">{title}</div>
            <div className="modalBody">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
