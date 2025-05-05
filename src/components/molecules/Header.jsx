import { useMenuStore } from "../../lib/store/menu";
import Button from "../atoms/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import cima_red_wine from "../../assets/cima_red_wine.png";

function Header() {
  const { handleMenuStatus } = useMenuStore();

  function openMenu() {
    handleMenuStatus({ bool: true });
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full h-16 flex justify-between items-center pr-4 border-b border-light">
      <i className="w-14 h-14 overflow-hidden">
        <img
          src={cima_red_wine}
          alt="cima_logo"
          className="w-full h-full object-cover"
        />
      </i>
      <div className="flex items-center gap-5">
        <Button
          text="Contactanos"
          icon={<MailOutlineIcon fontSize="small" />}
        />
        <button className="h-full text-light" onClick={openMenu}>
          <MenuIcon fontSize="large" />
        </button>
      </div>
    </header>
  );
}

export default Header;
