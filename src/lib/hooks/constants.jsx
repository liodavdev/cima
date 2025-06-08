import { useState } from "react";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import BungalowIcon from "@mui/icons-material/Bungalow";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import KeyIcon from "@mui/icons-material/Key";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const useConstants = () => {
  const [services] = useState([
    { id: 1, label: "Compra", icon: <RealEstateAgentIcon fontSize="small" /> },
    { id: 2, label: "Vende", icon: <BungalowIcon fontSize="small" /> },
    { id: 3, label: "Invierte", icon: <AttachMoneyIcon fontSize="small" /> },
    { id: 4, label: "Renta", icon: <KeyIcon fontSize="small" /> },
    { id: 5, label: "Servicios", icon: <WorkOutlineIcon fontSize="small" /> },
    { id: 6, label: "Agentes", icon: <SupportAgentIcon fontSize="small" /> },
    { id: 7, label: "Contacto", icon: <MailOutlineIcon fontSize="small" /> },
  ]);

  return { services };
};
