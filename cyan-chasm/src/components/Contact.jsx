// src/components/Contact.jsx
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        p: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Heading */}
      <Typography
        component={motion.h3}
        variant="h3"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        sx={{ mb: 4, textAlign: "center" }}
      >
        Contact Us
      </Typography>

      {/* Contact Boxes Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Email Box */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{
            backgroundColor: "#1b5e20",
            p: 3,
            borderRadius: 2,
            flex: 1,
            maxWidth: 400,
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <EmailIcon sx={{ fontSize: 90, mb: 1 , color:"black"}} />
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Email
          </Typography>
          <Typography variant="h4" color="#FFD700">forgttnsoldiers@gmail.com</Typography>
        </Box>

        {/* Phone Box */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{
            backgroundColor: "#1b5e20",
            p: 3,
            borderRadius: 2,
            flex: 1,
            maxWidth: 400,
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <LocalPhoneIcon sx={{ fontSize: 90, mb: 1,color:"black" }} />
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Phone
          </Typography>
          <Typography variant="h4" color="#FFD700">(845)-843-8199</Typography>
        </Box>
      </Box>
    </Box>
  );
}
