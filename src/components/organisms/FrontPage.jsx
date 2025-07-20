import { useConstants } from '../../lib/hooks/constants';
import Carrousel from '../molecules/Carrousel';
import ActionBtn from '../atoms/ActionBtn';
import Button from '../atoms/Button';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import YouTubeIcon from '@mui/icons-material/YouTube';

function FrontPage() {
	const { carrousel, slide, services } = useConstants();

	return (
		<article className='relative mb-20 h-screen w-full'>
			<Carrousel carrousel={carrousel} slide={slide} />
			<section className='flex h-[calc(100%-256px)] w-full flex-col justify-end gap-8 p-4'>
				<h2 className='text-light'>TU PUERTA A UNA NUEVA VIDA</h2>
				<div className='flex gap-5'>
					<Button
						text='Encuentra un agente'
						icon={<SupportAgentIcon fontSize='small' />}
					/>
					<Button
						text='Canal'
						background='bg-transparent'
						color='text-light'
						icon={<YouTubeIcon fontSize='small' />}
					/>
				</div>
				<div className='flex items-center justify-center gap-5'>
					{carrousel.map(({ id, action }) => (
						<button
							key={id}
							className={`h-3 w-3 rounded-full border ${
								slide === id ? 'bg-light' : 'bg-transparent'
							} border-light duration-500 ease-in-out`}
							onClick={action}
						></button>
					))}
				</div>
			</section>
			<div className='bg-light absolute bottom-0 left-0 grid h-64 w-full grid-cols-1 grid-rows-[80px_1fr] gap-4 overflow-hidden rounded-t-2xl p-4'>
				<div className='flex flex-col justify-center'>
					<h2 className='text-dark font-medium'>¿ QUE QUIERES HACER ?</h2>
					<p>Tenemos un equipo listo para ayudarte</p>
				</div>
				<menu className='flex items-center gap-5 overflow-auto'>
					{services.map(({ id, label, icon }) => (
						<ActionBtn key={id} text={label} icon={icon} />
					))}
				</menu>
			</div>
		</article>
	);
}

export default FrontPage;
