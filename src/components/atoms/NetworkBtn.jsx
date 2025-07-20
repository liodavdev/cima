function NetworkBtn({ icon }) {
	return (
		<button className='bg-red-wine text-light grid h-10 w-10 place-content-center rounded-full'>
			<a>{icon}</a>
		</button>
	);
}

export default NetworkBtn;
