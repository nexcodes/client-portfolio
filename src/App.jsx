import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Services from "./pages/services";
import Footer from "./components/footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/service"
              element={
                <>
                  <Services />
                  <Contact />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
}

export default App;
