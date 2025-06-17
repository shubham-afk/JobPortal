import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0A192F",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            letterSpacing: 1,
            color: "#64FFDA",
            textDecoration: "none",
          }}
          component={Link}
          to="/"
        >
          Job Portal
        </Typography>
        <Box sx={{ display: "flex", marginLeft: 4 }}>
          {["Home", "Add Job", "Jobs"].map((label, index) => {
            const paths = ["/home", "/add-job", "/jobs"];
            return (
              <Button
                key={label}
                component={Link}
                to={paths[index]}
                sx={{
                  color: "#FFFFFF",
                  marginLeft: 2,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#64FFDA33",
                    color: "#64FFDA",
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
