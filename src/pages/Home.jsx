import Layout from "../components/templates/Layout";
import FrontPage from "../components/organisms/FrontPage";
import Listing from "../components/organisms/Listing";

function Home() {
  return (
    <Layout>
      <FrontPage />
      <Listing />
    </Layout>
  );
}

export default Home;
