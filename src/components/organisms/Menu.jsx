import { useMenuStore } from '../../lib/store/menu';
import { useConstants } from '../../lib/hooks/constants';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../atoms/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import cima_dark from '../../assets/cima_dark.png';
import NetworkBtn from '../atoms/NetworkBtn';

function Menu() {
	const { menuIsOpen, handleMenuStatus } = useMenuStore();

	const { networks } = useConstants();

	function closeMenu() {
		handleMenuStatus({ bool: false });
	}

	return (
		<section
			className={`fixed ${
				menuIsOpen ? 'left-[0%]' : 'left-[100%]'
			} bg-light z-50 grid h-full w-full grid-cols-1 grid-rows-[64px_3fr_3fr_1fr] duration-300 ease-in-out`}
		>
			<header className='flex items-center justify-between pr-4'>
				<i className='h-16 w-16 overflow-hidden'>
					<img
						src={cima_dark}
						alt='cima_logo'
						className='h-full w-full object-cover'
					/>
				</i>
				<div className='flex items-center gap-5'>
					<Button
						text='Contactanos'
						color='text-light'
						background='bg-dark'
						border='border-dark'
						icon={<MailOutlineIcon fontSize='small' />}
					/>
					<button className='text-dark h-[35px] w-[35px]' onClick={closeMenu}>
						<CloseIcon fontSize='medium' />
					</button>
				</div>
			</header>
			<menu className='text-red-wine flex flex-col items-start justify-evenly p-4 text-[16px]'>
				<button>Inicio</button>
				<button>Compra</button>
				<button>Vende</button>
				<button>Invierte</button>
				<button>Agentes</button>
				<button>Servicios</button>
				<button>Contactanos</button>
			</menu>
			<article className='text-red-wine flex items-end justify-evenly px-4 pb-13 text-[16px]'>
				{networks.map(({ id, icon }) => (
					<NetworkBtn key={id} icon={icon} />
				))}
			</article>
			<article className='flex items-end p-4'>
				<p className='text-[10px]'>
					En CIMA protegemos sus datos personales conforme a la legislación
					aplicable. La información que recabamos se usa únicamente para fines
					de contacto, promoción y servicios inmobiliarios. Para conocer el
					aviso completo y ejercer sus derechos, contáctenos en
					<span className='text-red-wine font-bold'> contacto@cima.com</span>
				</p>
			</article>
		</section>
	);
}

export default Menu;
