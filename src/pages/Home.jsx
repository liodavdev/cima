import Layout from "../components/templates/Layout";
import item from "../assets/item_1.webp";
import Button from "../components/atoms/Button";

function Home() {
  return (
    <Layout>
      <article
        style={{
          backgroundImage: `url("${item}")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative w-full h-screen"
      >
        <div className="w-full h-[calc(100%-240px)] flex flex-col justify-end gap-5 p-4 pb-16">
          <h2 className="text-light">TU VENTANA A UNA NUEVA VIDA</h2>
          <div className="flex gap-5">
            <Button text="Encuentra un agente" />
            <Button
              text="Invierte"
              background="bg-transparent"
              color="text-light"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-60 p-4 pt-14 rounded-t-3xl bg-light">
          <h2 className="mb-4 text-dark font-medium">LISTA DE PROPIEDADES</h2>
          <p>Explora entre nuestra lista de propiedades</p>
        </div>
      </article>
      <article className="w-full h-96 bg-light"></article>
    </Layout>
  );
}

export default Home;
