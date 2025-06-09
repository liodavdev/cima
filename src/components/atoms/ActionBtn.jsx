function ActionBtn({ text, icon }) {
  return (
    <button className="min-w-20 h-full grid grid-cols-1 grid-rows-2 gap-2 p-2 text-[14px] rounded-xl text-red-wine">
      <i className="grid place-content-center rounded-md border text-red-wine">
        {icon}
      </i>
      <span>{text}</span>
    </button>
  );
}

export default ActionBtn;
