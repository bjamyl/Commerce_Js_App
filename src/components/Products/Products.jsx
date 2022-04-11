import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 2,
    name: "Sweater",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
  },
  {
    id: 3,
    name: "Pants",
    price: "$600",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "Boots",
    price: "$100",
    image:
      "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4} paddingTop={8}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} md={4} lg={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
