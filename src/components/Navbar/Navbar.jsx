import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{
            display:'flex',
            justifyContent:"space-between"
        }}>
          <IconButton>
            <Typography variant="h5" color="inherit">
              SpexShop
            </Typography>
          </IconButton>
          <IconButton aria-label="cart">
            <Badge badgeContent={4}>
                <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
