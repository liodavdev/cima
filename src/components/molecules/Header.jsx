import { useMenuStore } from "../../lib/store/menu";
import Button from "../atoms/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import cima_red_wine from "../../assets/cima_red_wine.png";
import cima_light_bg from "../../assets/cima_light_bg.png";
import useScroll from "../../lib/hooks/scroll";

function Header() {
  const { scroll } = useScroll();

  const { handleMenuStatus } = useMenuStore();

  function openMenu() {
    handleMenuStatus({ bool: true });
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full ${
        scroll < 100 ? "h-28 bg-transparent pl-4" : "h-16 bg-light pl-0"
      } flex justify-between items-center px-4 border-b border-light duration-300 ease-in-out`}
    >
      <i
        className={`relative w-20 ${
          scroll < 100 ? "h-20" : "h-16"
        } duration-300 ease-in-out overflow-hidden`}
      >
        <img
          src={cima_red_wine}
          alt="cima_logo"
          className={`absolute left-0 top-0 w-16 h-16 object-cover ${
            !scroll < 100 ? "opacity-100" : "opacity-0"
          } duration-300 ease-in-out`}
        />
        <img
          src={cima_light_bg}
          alt="cima_logo"
          className={`absolute left-0 top-0 w-20 h-20 object-cover ${
            scroll < 100 ? "opacity-100" : "opacity-0"
          } duration-300 ease-in-out`}
        />
      </i>
      <div className="flex items-center gap-5">
        <Button
          text="Contactanos"
          border={scroll < 100 ? "border-light" : "border-red-wine"}
          icon={<MailOutlineIcon fontSize="small" />}
        />
        <button className="h-full text-red-wine" onClick={openMenu}>
          <MenuIcon fontSize="large" />
        </button>
      </div>
    </header>
  );
}

export default Header;
