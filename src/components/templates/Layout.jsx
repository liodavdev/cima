import MenuIcon from "@mui/icons-material/Menu";
import Button from "../atoms/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Layout({ children }) {
  return (
    <section className="w-screen h-screen overflow-auto">
      <header className="fixed left-0 top-0 z-50 w-full h-16 flex justify-between items-center px-4 border-b border-light">
        <i className="text-light font-bold text-[28px]">CIMA</i>
        <div className="flex gap-5">
          <Button
            text="Contactanos"
            icon={<MailOutlineIcon fontSize="small" />}
          />
          <i className="h-full text-light">
            <MenuIcon fontSize="large" />
          </i>
        </div>
      </header>
      <main className="w-full overflow-hidden">{children}</main>
      <footer className="w-full h-screen bg-red-500"></footer>
    </section>
  );
}

export default Layout;
