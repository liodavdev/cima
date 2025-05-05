import Layout from "../components/templates/Layout";
import FrontPage from "../components/organisms/FrontPage";

function Home() {
  return (
    <Layout>
      <FrontPage />
      <article className="w-full h-96 bg-light"></article>
    </Layout>
  );
}

export default Home;
