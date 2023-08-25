import * as a from "./Footer.styles";
import logoFooterIcon from "../../assets/svg/logo-footer-icon.svg";
function Footer() {
  return (
    <a.Container data-testid="footer">
      <p>TODOS OS DIREITOS RESERVADOS À irsptech</p>
      <img src={logoFooterIcon} alt="IRSPTECH logo" />
    </a.Container>
  );
}

export default Footer;
