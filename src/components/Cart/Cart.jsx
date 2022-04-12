import React from "react";
import Empty from "../../assets/empty.jpg";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const EmptyCart = () => (
    <Container>
      <Typography>Ooops! Your bag is empty. Add some items first!</Typography>
      <img src={Empty} alt="empty" />
      <Button component={Link} to="/">
        Add items
      </Button>
    </Container>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className="cart_buttongroup">
          <Button
            size="large"
            type="button"
            variant="outlined"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button size="large" type="button" variant="contained">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading";

  return (
    <Container
      sx={{
        marginTop: 10,
      }}
    >
      <Paper
        sx={{
          padding: 3,
        }}
      >
        <Typography variant="h3">Shopping Bag</Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Paper>
    </Container>
  );
};

export default Cart;
