function Carrousel({ carrousel, slide }) {
	return (
		<div className='bg-dark absolute inset-0 -z-10'>
			{carrousel.map(({ id, image }) => (
				<div
					key={id}
					className='absolute inset-0 duration-700 ease-in-out'
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${image}")`,
						backgroundAttachment: 'fixed',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						opacity: slide === id ? 1 : 0,
					}}
				></div>
			))}
		</div>
	);
}

export default Carrousel;
