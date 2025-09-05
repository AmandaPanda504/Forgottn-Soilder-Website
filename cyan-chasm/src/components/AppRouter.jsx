import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Gallery from "./Gallery.jsx";
import Home from "./Home.jsx";
import Navbar from "./NavBar.jsx";


export default function AppRouter() {
  return (
     <Box sx={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </Box>
  );
}
