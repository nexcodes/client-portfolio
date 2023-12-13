import Client from "../../components/client";
import Footer from "../../components/footer-home";
import Hero from "../../components/hero";
import Journey from "../../components/journey";
import OurCreation from "../../components/our-creation";
import Services from "../../components/services";
import WhoWeAre from "../../components/who-we-are";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <Client />
      <Journey />
      <OurCreation />
      <Footer />
    </>
  );
};

export default Home;
