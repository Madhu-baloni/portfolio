import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../Style/NavbarPart.module.css";
import { Link, useNavigate } from "react-router-dom";
function NavbarPart() {
  const navItems = ["Home", "About", "Projects", "Contact"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (page) => {
    const formattedPage = page.toLowerCase().replace(/\s+/g, "-");
    navigate(formattedPage === "home" ? "/" : `/${formattedPage}`);
  };

  return (
    <>
      <Container>
        <AppBar component="nav" className={styles.navbar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  fontWeight: "bolder",
                  lineHeight: "1rem",
                  fontFamily: "fantasy",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                PortFolio.
              </Typography>
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((page) => (
                <Button
                  key={page}
                  sx={{ color: "#fff" }}
                  onClick={() => handleClick(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {navItems.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleClick(page);
                    handleOpenNavMenu();
                  }}
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default NavbarPart;
