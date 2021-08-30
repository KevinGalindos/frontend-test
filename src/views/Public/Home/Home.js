import { Navbar } from "../../../components/Navbar";
import { BannerHome } from "../../../components/BannerHome";
import { Products } from "../../../components/Products";
import { Footer } from "../../../components/Footer/Footer";
import { Benefits } from "../../../components/Benefits";
import { MoreInfo } from "../../../components/MoreInfo";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <BannerHome />
      <Products />
      <Benefits />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Home;
