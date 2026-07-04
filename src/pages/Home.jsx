import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Testimonials from "../components/testimonials/Testimonials";
// import Footer from "../components/footer/Footer";
import Footer2 from "../components/footer/Footer2";
import AnimationCar from "../components/hero/AnimationCar";
import OurGarage from "../components/ourgarage/OurGarage";
import ReadyToRoll from "../components/readytoroll/ReadyToRoll";
import { useState ,useEffect} from "react";
import MainLandingPage from "../components/hero/MainLandningPage";
import MyTech from "../components/techandprojects/MyTech";


function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme globally
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* <Hero /> */}
      <MainLandingPage />
      <AnimationCar />
      {/* <OurGarage/> */}
      <MyTech />
      <Testimonials />
      <ReadyToRoll />
      {/* <Footer /> */}
      <Footer2 />
    </>
  );
}

export default Home;