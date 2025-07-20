function ActionBtn({ text, icon }) {
	return (
		<button className='text-red-wine grid h-full min-w-20 grid-cols-1 grid-rows-2 gap-2 rounded-xl p-2 text-[14px]'>
			<i className='text-red-wine grid place-content-center rounded-md border'>
				{icon}
			</i>
			<span>{text}</span>
		</button>
	);
}

export default ActionBtn;
