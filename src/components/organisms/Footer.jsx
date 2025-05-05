import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  return (
    <footer className="w-full h-[calc(100%-64px)] grid grid-cols-1 grid-rows-[3fr_3fr_3fr_1fr] gap-4 p-4 pt-20 bg-light">
      <article className="flex flex-col gap-4 text-[16px] text-red-wine">
        <h4 className="font-bold text-dark">Necesitas ayuda para</h4>
        <div className="flex flex-col gap-2">
          <p>Comprar</p>
          <p>Vender</p>
          <p>Invertir</p>
          <p>Rentar</p>
        </div>
      </article>
      <article className="flex flex-col gap-4 text-[16px] text-red-wine">
        <h4 className="font-bold text-dark">Contacta a un agente</h4>
        <div className="flex flex-col gap-2">
          <p>Cesar C. Solís</p>
          <p>Jaqueline E. Mcpherson</p>
          <p>William C. Eyssautier</p>
          <p>Alejandro C. Eyssautier</p>
          <p>Valeria C. Eyssautier</p>
        </div>
      </article>
      <article className="grid grid-cols-1 grid-rows-[30px_1fr] text-[16px] text-red-wine">
        <h4 className="font-bold text-dark">Mantente al día</h4>
        <div className="flex justify-evenly items-center">
          <i className="w-10 h-10 grid place-content-center rounded-full bg-red-wine text-light">
            <YouTubeIcon fontSize="small" />
          </i>
          <i className="w-10 h-10 grid place-content-center rounded-full bg-red-wine text-light">
            <InstagramIcon fontSize="small" />
          </i>
          <i className="w-10 h-10 grid place-content-center rounded-full bg-red-wine text-light">
            <FacebookIcon fontSize="small" />
          </i>
          <i className="w-10 h-10 grid place-content-center rounded-full bg-red-wine text-light">
            <XIcon fontSize="small" />
          </i>
          <i className="w-10 h-10 grid place-content-center rounded-full bg-red-wine text-light">
            <WhatsAppIcon fontSize="small" />
          </i>
          <i className="w-10 h-10 grid place-content-center rounded-full bg-red-wine text-light">
            <TelegramIcon fontSize="small" />
          </i>
        </div>
      </article>
      <article className="flex items-end">
        <p className="text-[10px]">
          En CIMA protegemos sus datos personales conforme a la legislación
          aplicable. La información que recabamos se usa únicamente para fines
          de contacto, promoción y servicios inmobiliarios. Para conocer el
          aviso completo y ejercer sus derechos, contáctenos en
          <span className="text-red-wine font-bold"> contacto@cima.com</span>
        </p>
      </article>
    </footer>
  );
}

export default Footer;
