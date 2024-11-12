import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Navbar from './Component/Navbar';
import Home from './pages/Home/Home';
import Footer from './Component/Footer';
import { useContext } from 'react';
import { darkContext } from './DarkContext';

const App = () => {
  const theme = useContext(darkContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);

  return (
    <div className={`${darkMode ? "text-white bg-black" : "text-secondary"}`}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;