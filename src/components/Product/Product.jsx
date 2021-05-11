import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCard } from '@material-ui/icons';
import classes from '*.module.css';

const Product = () => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={} title={product.name}/>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" >
            {product.name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Product
