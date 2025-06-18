import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "../icons/bitcoin.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0a192f 0%, #0c2344 100%)",
        minHeight: "100vh",
        px: 2,
        py: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 7, md: 10 },
          pb: 2,
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          color="#fff"
          sx={{
            letterSpacing: 2,
            mb: 2,
            px: 2,
            py: 1,
            borderRadius: 2,
            background: "rgba(10, 25, 47, 0.7)",
            boxShadow: "0 4px 24px 0 rgba(30,58,138,0.12)",
            border: "2px solid #1e3a8a",
            maxWidth: 600,
            textAlign: "center",
          }}
        >
          Job Portal
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 4, md: 6 },
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            textAlign: "center",
            background: "rgba(255,255,255,0.97)",
            maxWidth: 350,
            mx: "auto",
            boxShadow: "0 8px 32px 0 rgba(30,58,138,0.18)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Image}
            alt="MetaMask Icon"
            style={{
              width: 90,
              height: 90,
              marginBottom: 24,
              borderRadius: "50%",
              boxShadow: "0 4px 16px 0 rgba(30,58,138,0.10)",
              border: "3px solid #1e3a8a",
              background: "#f4f6fb",
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, #1e3a8a 0%, #274472 100%)",
              color: "#fff",
              textTransform: "none",
              borderRadius: 3,
              px: 5,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: 1,
              boxShadow: "0 4px 16px 0 rgba(30,58,138,0.10)",
              transition: "all 0.2s",
              "&:hover": {
                background: "linear-gradient(90deg, #0f172a 0%, #1e3a8a 100%)",
                transform: "translateY(-2px) scale(1.04)",
                boxShadow: "0 8px 32px 0 rgba(30,58,138,0.18)",
              },
            }}
            onClick={() => navigate("/Home")}
          >
            Connect Wallet
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Homepage;
