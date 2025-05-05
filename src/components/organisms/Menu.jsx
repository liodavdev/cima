import { useMenuStore } from "../../lib/store/menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../atoms/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import cima_dark from "../../assets/cima_dark.png";

function Menu() {
  const { menuIsOpen, handleMenuStatus } = useMenuStore();

  function closeMenu() {
    handleMenuStatus({ bool: false });
  }

  return (
    <section
      className={`fixed ${
        menuIsOpen ? "left-[0%]" : "left-[100%]"
      } z-50 w-full h-full grid grid-cols-1 grid-rows-[64px_1fr_1fr] bg-light duration-300 ease-in-out`}
    >
      <header className="flex justify-between items-center px-4">
        <i className="w-14 h-14 overflow-hidden">
          <img
            src={cima_dark}
            alt="cima_logo"
            className="w-full h-full object-cover"
          />
        </i>
        <div className="flex items-center gap-5">
          <Button
            text="Contactanos"
            color="text-light"
            background="bg-dark"
            icon={<MailOutlineIcon fontSize="small" />}
          />
          <button className="h-full text-dark" onClick={closeMenu}>
            <CloseIcon fontSize="medium" />
          </button>
        </div>
      </header>
      <menu className="flex flex-col justify-evenly items-start p-4 pt-10 text-[16px] text-red-wine">
        <button>Inicio</button>
        <button>Compra</button>
        <button>Vende</button>
        <button>Invierte</button>
        <button>Agentes</button>
        <button>Servicios</button>
        <button>Contactanos</button>
      </menu>
      <article className=""></article>
    </section>
  );
}

export default Menu;
