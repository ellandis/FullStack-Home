import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Instructions from "./pages/Instructors.jsx";
import Contact from "./pages/Contacts.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructors from "./pages/Instructors.jsx";

function App() {
  return (
    <BrowserRouter className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
