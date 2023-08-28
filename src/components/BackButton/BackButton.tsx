import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import * as s from "./BackButton.styles"

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navegar para a página anterior
  };

  return (
    <s.BackButton onClick={handleBack}><BsArrowLeft /> Voltar</s.BackButton>
  );
}

export default BackButton;
