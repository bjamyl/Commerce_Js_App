import React from "react";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const Product = ({ product, onAddToCart }) => {
  return (
    <Card>
      <CardMedia
        image={product.image?.url}
        title={product.name}
        sx={{
          height: 75,
          margin: 0.5,
          borderRadius: 2,
          paddingTop: "56.25%",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="h7">{product.price.formatted_with_symbol}</Typography>
        <CardActions
          sx={{
            padding: 0,
          }}
        >
          <Button
          
            gutterBottom
            variant="contained"
            disableElevation
            sx={{
              width: "1",
            }}
            onClick={() => onAddToCart(product.id, 1)}
          >
            add to cart
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
