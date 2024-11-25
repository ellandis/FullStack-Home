import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Personnel from "./pages/Personnel";
// import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonnelDetail from "./pages/PersonnelDetail";
import Paths from "./pages/Paths";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/personnel/:id" element={<PersonnelDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>
        <Route path="/paths" element={<Paths />}>
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
        </Route>
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
