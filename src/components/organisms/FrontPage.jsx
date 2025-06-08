import { useConstants } from "../../lib/hooks/constants";
import item from "../../assets/item_1.webp";
import ActionBtn from "../atoms/ActionBtn";
import Button from "../atoms/Button";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import YouTubeIcon from "@mui/icons-material/YouTube";

function FrontPage() {
  const { services } = useConstants();

  return (
    <article
      style={{
        backgroundImage: `url("${item}")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-dvh"
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
          {services.map(({ id, label, icon }) => (
            <ActionBtn key={id} text={label} icon={icon} />
          ))}
        </menu>
      </div>
    </article>
  );
}

export default FrontPage;
