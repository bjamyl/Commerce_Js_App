import React from "react";
import { Grid, Container } from "@mui/material";
import Product from "./Product/Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <Container>
        <Grid container justifyContent="center" spacing={4} paddingTop={8}>
          {products.map((product) => (
            <Grid item key={product.id} xs={6} md={4} >
              <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Products;
