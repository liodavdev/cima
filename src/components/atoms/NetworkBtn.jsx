function NetworkBtn({ icon }) {
  return (
    <button className="w-10 h-10 grid place-content-center rounded-full bg-red-wine text-light">
      <a>{icon}</a>
    </button>
  );
}

export default NetworkBtn;
