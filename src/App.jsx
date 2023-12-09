import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
