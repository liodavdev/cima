import React from 'react';

function Button({
	text = 'Contenido',
	background = 'bg-light',
	border = 'border-light',
	color = 'text-red-wine',
	icon = '',
}) {
	return (
		<button
			className={`flex min-h-[35px] gap-2 rounded-full px-6 py-2 text-[14px] ${color} ${background} border-2 ${border} duration-300 ease-in-out`}
		>
			{text}
			{icon}
		</button>
	);
}

export default Button;
