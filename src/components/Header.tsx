import React, { useState, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import styles from "@/styles/components/Header.module.css";

export const Header = () => {
  const pages = ["Request", "Cases", "Test"];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    document.documentElement.style.overflowX = "auto";
    document.body.style.overflowX = "auto";
    setAnchorElNav(null);
  };

  return (
    <div style={{ margin: "0", padding: "0" }}>
      <AppBar position="fixed" style={{ backgroundColor: "white", position: "relative" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              className={styles.disableSelect}
              variant="h3"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 100,
                color: "#f35f29",
                fontFamily: "Satisfy",
                textDecoration: "none",
              }}
            >
              <Link href="/">Optum</Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              className={styles.disableSelect}
              variant="h3"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Satisfy",
                fontWeight: 700,
                color: "#f35f29",
                textDecoration: "none",
              }}
            >
              Optum
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={`/${page.replace(" ", "")}`}
                  className={styles.link}
                  style={{ color: "#f35f29" }}
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
