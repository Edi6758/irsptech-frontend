import * as s from "./AlertModal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <s.Overlay>
      <s.Container>
        <s.CloseButton onClick={onClose}>X</s.CloseButton>
        {children}
      </s.Container>
    </s.Overlay>
  );
}

export default Modal;
