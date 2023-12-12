import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Services from "./pages/services";
import Footer from "./components/footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default App;
