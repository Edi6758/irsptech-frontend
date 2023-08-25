import * as s from "./Header.styles";
import logoIcon from "../../assets/svg/logo-icon.svg";
import menuIcon from "../../assets/svg/menu-icon.svg";
function Header() {
  const handleClick = () => {
    window.open("https://irsptech.com.br", "_blank");
  };

  return (
    <s.Container data-testid="header">
      <img src={menuIcon} alt="menu logo" />
      <img src={logoIcon} alt="main logo" onClick={handleClick} />
    </s.Container>
  );
}

export default Header;
