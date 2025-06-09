function Heading({ principal, secondary }) {
  return (
    <header className="flex flex-col justify-center items-center">
      <h6 className="text-dark">{secondary}</h6>
      <h2 className="text-[44px] font-bold bg-gradient-to-r from-dark to-red-wine bg-clip-text text-transparent">
        {principal}
      </h2>
    </header>
  );
}

export default Heading;
