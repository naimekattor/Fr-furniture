import Hero from "./Hero";
import Products from "../../Component/Products";
import WhyChooseUs from "./WhyChooseUs";
import Experience from "./Experience";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Products />
      <Experience />
      <Testimonials />
    </div>
  );
};

export default Home;