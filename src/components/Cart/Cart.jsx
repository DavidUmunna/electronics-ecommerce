// src/pages/Cart/Cart.js
import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  IconButton,
  TextField
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/Cartcontext';
import { useAuth } from '../../context/AuthContext';
import useStyles from './Cart.styles';

const CartPage = () => {
  const classes = useStyles();
  const { 
    cartItems, 
    cartTotal, 
    removeFromCart, 
    updateQuantity, 
    clearCart 
  } = useCart();
  const { isAuthenticated } = useAuth();

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (!isNaN(quantity)) {
      updateQuantity(productId, quantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" className={classes.emptyContainer}>
        <Paper elevation={3} className={classes.emptyPaper}>
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" gutterBottom>
            Looks like you haven't added anything to your cart yet
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/shop"
            className={classes.button}
          >
            Continue Shopping
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow className={classes.tableHeader}>
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      <div className={classes.productCell}>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className={classes.productImage} 
                        />
                        <Typography variant="body1">
                          {item.name}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      ${item.price.toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        inputProps={{ min: 1 }}
                        className={classes.quantityInput}
                      />
                    </TableCell>
                    <TableCell align="center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton 
                        onClick={() => removeFromCart(item.id)}
                        color="secondary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={clearCart}
            className={classes.clearButton}
          >
            Clear Cart
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} className={classes.summaryPaper}>
            <Typography variant="h6" className={classes.summaryTitle}>
              Order Summary
            </Typography>
            
            <div className={classes.summaryRow}>
              <Typography variant="body1">Subtotal:</Typography>
              <Typography variant="body1">
                ${cartTotal.toFixed(2)}
              </Typography>
            </div>
            
            <div className={classes.summaryRow}>
              <Typography variant="body1">Shipping:</Typography>
              <Typography variant="body1">
                {cartTotal > 50 ? 'FREE' : '$5.00'}
              </Typography>
            </div>
            
            <div className={classes.summaryRow}>
              <Typography variant="body1">Tax:</Typography>
              <Typography variant="body1">
                ${(cartTotal * 0.1).toFixed(2)}
              </Typography>
            </div>
            
            <div className={classes.summaryDivider} />
            
            <div className={classes.summaryRow}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">
                ${(cartTotal + (cartTotal > 50 ? 0 : 5) + (cartTotal * 0.1)).toFixed(2)}
              </Typography>
            </div>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              component={Link}
              to={isAuthenticated ? "/checkout" : "/account?redirect=/checkout"}
              className={classes.checkoutButton}
            >
              Proceed to Checkout
            </Button>

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              component={Link}
              to="/shop"
              className={classes.continueButton}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;