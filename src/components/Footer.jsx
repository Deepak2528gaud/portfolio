import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { LinkedIn, Instagram, Facebook } from "@mui/icons-material";

function Footer() {
  return (
    <Box component="footer" sx={{
      backgroundColor: "#1A1A2E",
      color: "white",
      py: 4,
      mt: 4,
      marginTop: 0
    }}>
      <Container maxWidth="lg">

        {/* Social Media Links */}
        <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
          <IconButton
            href="https://www.linkedin.com/in/deepak-sharma8810088904"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#0A66C2" } }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>

          <IconButton
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#E4405F" } }}
          >
            <Instagram fontSize="large" />
          </IconButton>

          <IconButton
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#1877F2" } }}
          >
            <Facebook fontSize="large" />
          </IconButton>
        </Stack>


        {/* Copyright Text */}
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()}. Designed by Deepak Gaud. All right reserved.
        </Typography>

      </Container>
    </Box>
  );
}

export default Footer;
