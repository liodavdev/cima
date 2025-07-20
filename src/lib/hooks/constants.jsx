import { useState } from 'react';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import BungalowIcon from '@mui/icons-material/Bungalow';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import KeyIcon from '@mui/icons-material/Key';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import item_1 from '../../assets/item_1.webp';
import item_2 from '../../assets/item_2.webp';
import item_3 from '../../assets/item_3.webp';
import item_4 from '../../assets/item_4.webp';
import item_5 from '../../assets/item_5.webp';

export const useConstants = () => {
	const [services] = useState([
		{ id: 1, label: 'Compra', icon: <RealEstateAgentIcon fontSize='small' /> },
		{ id: 2, label: 'Vende', icon: <BungalowIcon fontSize='small' /> },
		{ id: 3, label: 'Invierte', icon: <AttachMoneyIcon fontSize='small' /> },
		{ id: 4, label: 'Renta', icon: <KeyIcon fontSize='small' /> },
		{ id: 5, label: 'Servicios', icon: <WorkOutlineIcon fontSize='small' /> },
		{ id: 6, label: 'Agentes', icon: <SupportAgentIcon fontSize='small' /> },
		{ id: 7, label: 'Contacto', icon: <MailOutlineIcon fontSize='small' /> },
	]);

	const [networks] = useState([
		{ id: 1, label: 'YouTube', icon: <YouTubeIcon fontSize='small' /> },
		{ id: 2, label: 'Instagram', icon: <InstagramIcon fontSize='small' /> },
		{ id: 3, label: 'Facebook', icon: <FacebookIcon fontSize='small' /> },
		{ id: 4, label: 'X', icon: <XIcon fontSize='small' /> },
		{ id: 5, label: 'WhatsApp', icon: <WhatsAppIcon fontSize='small' /> },
		{ id: 6, label: 'Telegram', icon: <TelegramIcon fontSize='small' /> },
	]);

	const [slide, setSlide] = useState(3);

	const [carrousel] = useState([
		{ id: 1, image: item_1, action: () => setSlide(1) },
		{ id: 2, image: item_2, action: () => setSlide(2) },
		{ id: 3, image: item_3, action: () => setSlide(3) },
		{ id: 4, image: item_4, action: () => setSlide(4) },
		{ id: 5, image: item_5, action: () => setSlide(5) },
	]);

	return { carrousel, slide, services, networks };
};
