import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/694bd8a5-794e-4909-b543-552397099fb1/zoomx-vaporfly-next-running-shoe-T5qg9m.png',},
  { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/air13teaser.jpg',},
]

const Products = () => {
  return(
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )

}

export default Products;