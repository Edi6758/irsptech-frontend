import React from "react";
import * as s from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const Modal = ({ isOpen, onClose, onDelete }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <s.Container>
      <s.Content>
        <p>Tem certeza de que deseja deletar?</p>
        <div>
          <s.ButtonCancel onClick={onClose}>Cancelar</s.ButtonCancel>
          <s.ButtonDelete onClick={onDelete}>Deletar</s.ButtonDelete>
        </div>
      </s.Content>
    </s.Container>
  );
};

export default Modal;
