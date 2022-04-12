import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import "./cartitem.css";

const CartItem = ({
  item,
  handleRemoveFromCart,
  handleUpdateCartQty
}) => {
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <CardMedia
        image={item.image?.url}
        alt={item.name}
        sx={{
          flex: 1,
          margin: 0.5,
          borderRadius: 2,
        }}
      />
      <div className="card_section">
        <CardContent>
          <Typography>{item.name}</Typography>
          <Typography>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <div className="button_group">
            <Button size="small" variant="outlined" onClick={() => handleUpdateCartQty(item.id,item.quantity -1)}>
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button size="small" variant="outlined" onClick={() => handleUpdateCartQty(item.id,item.quantity +1)}>
              +
            </Button>
          </div>
          <Button type="button" variant="contained" onClick={()=>handleRemoveFromCart(item.id)}>
            Remove
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default CartItem;
