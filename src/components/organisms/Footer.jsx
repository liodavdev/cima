import { useConstants } from '../../lib/hooks/constants';
import NetworkBtn from '../atoms/NetworkBtn';

function Footer() {
	const { networks } = useConstants();

	return (
		<footer className='bg-light grid h-[calc(100%-64px)] w-full grid-cols-1 grid-rows-[3fr_3fr_3fr_1fr] gap-4 p-4 pt-20'>
			<article className='text-red-wine flex flex-col gap-4 text-[16px]'>
				<h4 className='text-dark font-bold'>Necesitas ayuda para</h4>
				<div className='flex flex-col gap-2'>
					<p>Comprar</p>
					<p>Vender</p>
					<p>Invertir</p>
					<p>Rentar</p>
				</div>
			</article>
			<article className='text-red-wine flex flex-col gap-4 text-[16px]'>
				<h4 className='text-dark font-bold'>Contacta a un agente</h4>
				<div className='flex flex-col gap-2'>
					<p>Cesar C. Solís</p>
					<p>Jaqueline E. Mcpherson</p>
					<p>William C. Eyssautier</p>
					<p>Alejandro C. Eyssautier</p>
					<p>Valeria C. Eyssautier</p>
				</div>
			</article>
			<article className='text-red-wine grid grid-cols-1 grid-rows-[30px_1fr] text-[16px]'>
				<h4 className='text-dark font-bold'>Mantente al día</h4>
				<div className='flex items-center justify-evenly'>
					{networks.map(({ id, icon }) => (
						<NetworkBtn key={id} icon={icon} />
					))}
				</div>
			</article>
			<article className='flex items-end'>
				<p className='text-[10px]'>
					En CIMA protegemos sus datos personales conforme a la legislación
					aplicable. La información que recabamos se usa únicamente para fines
					de contacto, promoción y servicios inmobiliarios. Para conocer el
					aviso completo y ejercer sus derechos, contáctenos en
					<span className='text-red-wine font-bold'> contacto@cima.com</span>
				</p>
			</article>
		</footer>
	);
}

export default Footer;
