import item from "../../assets/item_1.webp";
import ActionBtn from "../atoms/ActionBtn";
import Button from "../atoms/Button";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyIcon from "@mui/icons-material/Key";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import BungalowIcon from "@mui/icons-material/Bungalow";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import YouTubeIcon from "@mui/icons-material/YouTube";

function FrontPage() {
  return (
    <article
      style={{
        backgroundImage: `url("${item}")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-screen"
    >
      <div className="w-full h-[calc(100%-256px)] flex flex-col justify-end gap-5 p-4 pb-22">
        <h2 className="text-light">TU PUERTA A UNA NUEVA VIDA</h2>
        <div className="flex gap-5">
          <Button
            text="Encuentra un agente"
            icon={<SupportAgentIcon fontSize="small" />}
          />
          <Button
            text="Canal"
            background="bg-transparent"
            color="text-light"
            icon={<YouTubeIcon fontSize="small" />}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 grid grid-cols-1 grid-rows-[50px_1fr] gap-4 p-4 pt-10 pb-14 rounded-t-2xl bg-light overflow-hidden">
        <div>
          <h2 className="text-dark font-medium">¿ QUE QUIERES HACER ?</h2>
          <p>Tenemos un equipo listo para ayudarte</p>
        </div>
        <menu className="flex items-center gap-5 overflow-auto">
          <ActionBtn
            text="Compra"
            icon={<RealEstateAgentIcon fontSize="small" />}
          />
          <ActionBtn text="Vende" icon={<BungalowIcon fontSize="small" />} />
          <ActionBtn
            text="Invierte"
            icon={<AttachMoneyIcon fontSize="small" />}
          />
          <ActionBtn text="Renta" icon={<KeyIcon fontSize="small" />} />
          <ActionBtn
            text="Servicios"
            icon={<WorkOutlineIcon fontSize="small" />}
          />
          <ActionBtn
            text="Agentes"
            icon={<SupportAgentIcon fontSize="small" />}
          />
          <ActionBtn
            text="Contacto"
            icon={<MailOutlineIcon fontSize="small" />}
          />
        </menu>
      </div>
    </article>
  );
}

export default FrontPage;
