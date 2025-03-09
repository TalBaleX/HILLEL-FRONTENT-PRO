import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Switch,
  Box,
  FormControlLabel,
  IconButton,
  Divider,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";

function PageLayout({ darkMode, setDarkMode }) {
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <nav>
            <Link
              to="/"
              style={{
                margin: "0 10px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/todo"
              style={{
                margin: "0 10px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ToDo
            </Link>
            <Link
              to="/swapi"
              style={{
                margin: "0 10px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SWAPI
            </Link>
          </nav>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleThemeChange} />}
            label="Dark Mode"
          />
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Container>
      <Divider />
      <Box component="footer" sx={{ py: 3, textAlign: "center" }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Contact me:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon />
            <Typography variant="body2">contact@talbalex.com</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon />
            <Typography variant="body2">+123 456 7890</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <HomeIcon />
            <Typography variant="body2">
              123 Jefferson Street, Dallas
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageLayout;
