import React from "react";

function Button({
  text = "Contenido",
  background = "bg-light",
  border = "border-light",
  color = "text-dark",
}) {
  return (
    <button
      className={`min-h-[35px] text-[14px] px-6 py-2 rounded-full ${color} ${background} border-2 ${border} cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default Button;
