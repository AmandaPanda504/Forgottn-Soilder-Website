// src/components/Home.jsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Left collage set
const LEFT_IMAGES = [
  "src/images/collage/image11.jpeg",
  "src/images/collage/image12.jpeg",
  "src/images/collage/image13.jpeg",
  "src/images/collage/image14.jpeg",
  "src/images/collage/image15.jpeg",
  "src/images/collage/image16.jpeg",
  "src/images/collage/image27.jpeg",
  "src/images/collage/image30.jpeg",
];

// Right collage set
const RIGHT_IMAGES = [
  "src/images/collage/iamge20.jpeg",
  "src/images/collage/image21.jpeg",
  "src/images/collage/image29.jpeg",
  "src/images/collage/image23.jpeg",
  "src/images/collage/image24.jpeg",
  "src/images/collage/image25.jpeg",
  "src/images/collage/image26.jpeg",
  "src/images/collage/image29.jpeg",
  "src/images/collage/image19.jpeg",
];

const TILES_PER_SIDE = 12;

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Left + Right background collages */}
      <SideCollage side="left" images={LEFT_IMAGES} />
      <SideCollage side="right" images={RIGHT_IMAGES} />

      {/* Center hero */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            backdropFilter: "blur(6px)",
            background: "rgba(0,0,0,0.25)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            maxWidth: 800,
          }}
        >
          {/* Tagline */}
          <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Jamaican Meal Prep And Delivery Service
          </Typography>

          {/* Main image */}
          <Box
            component="img"
            src="src/images/image1.jpg"
            alt="Forgttn Soldier"
            sx={{
              width: { xs: 300, md: 500 },
              borderRadius: "8px",
              objectFit: "cover",
              mb: 1,
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            }}
          />

          {/* Location */}
          <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
            Middletown, NY
          </Typography>

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            Forgttn Soldier
          </Typography>
        </Box>
      </Box>

      {/* Lighter overlay tint */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundColor: "rgba(26, 26, 26, 0)", 
          zIndex: 1,
        }}
      />
    </Box>
  );
}

function SideCollage({ side, images }) {
  const tiles = Array.from({ length: TILES_PER_SIDE }, (_, i) => images[i % images.length]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      animate={{ opacity: 0.3, x: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        display: { xs: "none", md: "grid" },
        position: "absolute",
        top: 0,
        bottom: 0,
        [side]: 0,
        width: { md: "28vw", lg: "30vw" },
        zIndex: 0,
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(140px, 1fr)",
        gap: 1,
        p: 2,
        filter: "blur(1.5px) saturate(1.05) contrast(1.05)",
      }}
    >
      {tiles.map((src, i) => (
        <Box key={`${side}-${i}`} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Box
            component="img"
            src={src}
            alt={`collage-${side}-${i}`}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      ))}
    </Box>
  );
}
