function ActionBtn({ text, icon }) {
  return (
    <button className="min-w-20 h-full grid grid-cols-1 grid-rows-[2fr_1fr] gap-2 p-2 text-[14px] rounded-xl text-red-wine">
      <i className="grid place-content-center rounded-md bg-red-wine text-light">
        {icon}
      </i>
      <span>{text}</span>
    </button>
  );
}

export default ActionBtn;
