import { useMenuStore } from '../../lib/store/menu';
import { useScreen } from '../../lib/hooks/screen';
import Button from '../atoms/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import cima_red_wine from '../../assets/cima_red_wine.png';
import cima_light_bg from '../../assets/cima_light_bg.png';

function Header() {
	const { scroll } = useScreen();

	const { handleMenuStatus } = useMenuStore();

	function openMenu() {
		handleMenuStatus({ bool: true });
	}

	return (
		<header
			className={`fixed top-0 left-0 z-50 w-full ${
				scroll < 100
					? 'h-28 bg-transparent shadow-none'
					: 'bg-light h-16 pl-0 shadow-sm'
			} border-light flex items-center justify-between border-b px-4 duration-300 ease-in-out`}
		>
			<i
				className={`relative w-20 ${
					scroll < 100 ? 'h-20' : 'h-16'
				} overflow-hidden duration-300 ease-in-out`}
			>
				<img
					src={cima_red_wine}
					alt='cima_logo'
					className={`absolute top-0 left-0 h-16 w-16 object-cover ${
						!scroll < 100 ? 'opacity-100' : 'opacity-0'
					} duration-300 ease-in-out`}
				/>
				<img
					src={cima_light_bg}
					alt='cima_logo'
					className={`absolute top-0 left-0 h-20 w-20 object-cover ${
						scroll < 100 ? 'opacity-100' : 'opacity-0'
					} duration-300 ease-in-out`}
				/>
			</i>
			<div className='flex items-center gap-5'>
				<Button
					text='Contactanos'
					border={scroll < 100 ? 'border-light' : 'border-red-wine'}
					icon={<MailOutlineIcon fontSize='small' />}
				/>
				<button className='text-red-wine h-full' onClick={openMenu}>
					<MenuIcon fontSize='large' />
				</button>
			</div>
		</header>
	);
}

export default Header;
