// src/components/About.jsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";

// shared slider config
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

export default function About() {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 6 }, backgroundColor: "#121212", color: "white" }}>
      {/* ===== Row 1 ===== */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          mb: { xs: 5, md: 8 },
        }}
      >
        {/* Left col: About text */}
        <Box
          sx={{
            backgroundColor: "#662200",
            borderRadius: 2,
            p: { xs: 2.5, md: 3 },
            alignSelf: "start",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
            About Our Jamaican Meal Service
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Forgttn Soldier is a veteran-owned meal prep and delivery service proudly serving the Hudson Valley.
            Blending the vibrant flavors of Jamaica, we bring soulful,
            home-styled meals right to your door—Sunday through Friday. Founded on discipline, heart, and heritage,
            Forgttn Soldier honors the legacy of those who serve—on the front lines and in the kitchen.
          </Typography>
        </Box>

        {/* Right col: Slider (image1, image2) + Caption */}
        <Box sx={{ justifySelf: "stretch", alignSelf: "start" }}>
          <Box sx={{ maxWidth: 560, mx: { xs: "auto", md: 0 } }}>
            <Slider {...sliderSettings}>
              <Box
                component="img"
                src="src/images/image3.JPEG"
                alt="Slide 1"
                sx={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 2 }}
              />
              <Box
                component="img"
                src="src/images/image2.JPEG"
                alt="Slide 2"
                sx={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 2 }}
              />
            </Slider>
            <Typography
              variant="subtitle1"
              sx={{ mt: 1.5, textAlign: "center", fontStyle: "italic", color: "#c8e6c9" }}
            >
              Organic and fresh ingredients, no herbicides, pesticides and insecticides
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ===== Row 2 ===== */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {/* Left col: Slider (image5, image6) + Caption */}
        <Box sx={{ justifySelf: "stretch", alignSelf: "start" }}>
          <Box sx={{ maxWidth: 560, mx: { xs: "auto", md: 0 } }}>
            <Slider {...sliderSettings}>
              <Box
                component="img"
                src="src/images/image5.JPEG"
                alt="Slide 5"
                sx={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 2 }}
              />
              <Box
                component="img"
                src="src/images/image6.JPEG"
                alt="Slide 6"
                sx={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 2 }}
              />
            </Slider>
            <Typography
              variant="subtitle1"
              sx={{ mt: 1.5, textAlign: "center", fontStyle: "italic", color: "#c8e6c9" }}
            >
              Organic and fresh ingredients, no herbicides, pesticides and insecticides
            </Typography>
          </Box>
        </Box>

        {/* Right col: Mission Statement */}
        <Box
          sx={{
            backgroundColor: "#999900",
            borderRadius: 2,
            p: { xs: 2.5, md: 3 },
            alignSelf: "start",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
            Mission Statement
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            At Forgttn Soldier, our mission is 
            to bring the bold flavors of Jamaican cuisine to the Hudson Valley, serving handcrafted, homestyle meals from Sunday to Friday. Rooted in tradition and inspired by service, we aim to satisfy all who crave authentic, delicious Jamaican food, honoring heritage, community, and the forgotten heroes who serve through food.

          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, mt: 1.5 }}>
            
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
