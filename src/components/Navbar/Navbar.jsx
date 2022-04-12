import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <div>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <Typography component={Link} to="/" variant="h5" color="inherit">
              SpexShop
            </Typography>
          </IconButton>
          {location.pathname === "/" && (
            <IconButton component={Link} to="/cart" aria-label="cart">
              <Badge badgeContent={totalItems}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
