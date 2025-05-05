import Header from "../molecules/Header";
import Menu from "../organisms/Menu";

function Layout({ children }) {
  return (
    <section className="relative w-screen h-screen overflow-auto scroll-">
      <Header />
      <Menu />
      <main className="w-full overflow-hidden">{children}</main>
      <footer className="w-full h-screen bg-red-500"></footer>
    </section>
  );
}

export default Layout;
