import Showcase from "../components/Showcase";
import About from "../components/About";
import JoinNow from "../components/JoinNow";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
};

export default Home;