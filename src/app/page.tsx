import Showcase from "../components/ui/Showcase";
import About from "../components/ui/About";
import JoinNow from "../components/ui/JoinNow";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

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