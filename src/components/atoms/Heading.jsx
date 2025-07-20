function Heading({ principal, secondary }) {
	return (
		<header className='flex flex-col items-center justify-center'>
			<h6 className='text-dark'>{secondary}</h6>
			<h2 className='from-dark to-red-wine bg-gradient-to-r bg-clip-text text-[44px] font-bold text-transparent'>
				{principal}
			</h2>
		</header>
	);
}

export default Heading;
