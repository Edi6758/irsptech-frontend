import * as s from "./AddUserButton.styles";
import { useNavigate } from "react-router-dom";

interface AddUserButtonProps {
  text: string;
  icon: React.ReactNode;
  route: string;
}

function AddUserButton({ text, icon, route }: AddUserButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <s.Container>
      <s.AddButton onClick={handleClick}>
        {text} {icon}
      </s.AddButton>
    </s.Container>
  );
}

export default AddUserButton;
