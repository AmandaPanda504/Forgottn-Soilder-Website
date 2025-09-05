// src/components/Gallery.jsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Your gallery images (public/images/collage/…)
const images = [
  { src: "src/images/image10.jpeg", label: "Curry Goat" },
  { src: "src/images/image111.jpeg", label: "Stew Chicken" },
  { src: "src/images/image112.jpeg", label: "White Rice" },
  { src: "src/images/image114.jpeg", label: "Curry Goat" },
  { src: "src/images/image115.png", label: "Steamed Callaloo" },
  { src: "src/images/image116.png", label: "Escovitch Fish" },
  { src: "src/images/image117.png", label: "Fried Plantain" },
  { src: "src/images/image119.png", label: "Saltfish Fritters" },
  { src: "src/images/image7.png", label: "Rice and Peas" },
  { src: "src/images/image8.png", label: "Curry Chicken and White Rice" },
  { src: "src/images/image9.png", label: "Oxtail" },
  { src: "src/images/image113.jpeg", label: "Stew Chicken" },
  { src: "src/images/image121.png", label: "Festival" },
  { src: "src/images/image120.png", label: "Pumpkin Soup" },
  { src: "src/images/image.png", label: "Steamed Cabbage" },
];

// A reusable image tile
function ImgTile({ src, alt, label }) {
  return (
    <Box>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: 220,             
          objectFit: "cover",      
          borderRadius: "8px",
          display: "block",
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{ mt: 1, textAlign: "center", color: "white" }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function Gallery() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 6 },
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4, textAlign: "center", fontWeight: 700 }}
      >
        Gallery
      </Typography>

      {/* Even Grid: 2 cols mobile, 3–4 on bigger screens */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",   
            sm: "1fr 1fr 1fr", 
            md: "1fr 1fr 1fr 1fr", 
            lg: "1fr 1fr 1fr 1fr 1fr", 
          },
          gap: 2,
        }}
      >
        {images.map((item, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <ImgTile src={item.src} alt={item.label} label={item.label} />
          </Box>
        ))}
      </Box>

      {/* Subtle Footer Disclaimer */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography
          variant="caption"
          sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem" }}
        >
          © {new Date().getFullYear()} Forgttn Soldier. Some images are not owned
          by us and are used for illustrative purposes only. Credit belongs to
          the original creators.
        </Typography>
      </Box>
    </Box>
  );
}
