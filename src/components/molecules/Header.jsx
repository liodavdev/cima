import Button from "../atoms/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { useMenuStore } from "../../lib/store/menu";

function Header() {
  const { handleMenuStatus } = useMenuStore();

  function openMenu() {
    handleMenuStatus({ bool: true });
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full h-16 flex justify-between items-center px-4 border-b border-light">
      <i className="text-light font-bold text-[28px]">CIMA</i>
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
