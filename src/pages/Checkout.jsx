// src/components/Checkout/Checkout.js
import React, { useContext, useState } from 'react';
import { useCart } from '../context/Cartcontext';
import { TextField, Button, Paper, Typography, Stepper, Step, StepLabel, Grid } from '@mui/material';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = () => {
    // Process order here
    console.log('Order submitted:', { shippingInfo, paymentInfo, cartItems });
    clearCart();
    handleNext();
  };

  const steps = ['Shipping Information', 'Payment Details', 'Review Order'];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="name"
                value={shippingInfo.name}
                onChange={handleShippingChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                name="address"
                value={shippingInfo.address}
                onChange={handleShippingChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="City"
                name="city"
                value={shippingInfo.city}
                onChange={handleShippingChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="ZIP/Postal Code"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleShippingChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Country"
                name="country"
                value={shippingInfo.country}
                onChange={handleShippingChange}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Expiry Date"
                placeholder="MM/YY"
                name="expiry"
                value={paymentInfo.expiry}
                onChange={handlePaymentChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="CVV"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handlePaymentChange}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <div>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            {cartItems.map(item => (
              <div key={item.id} style={{ marginBottom: '1rem' }}>
                <Typography>{item.name} x {item.quantity}</Typography>
                <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
              </div>
            ))}
            <Typography variant="h6" style={{ marginTop: '1rem' }}>
              Total: ${cartTotal.toFixed(2)}
            </Typography>
            <Typography variant="h6" gutterBottom style={{ marginTop: '2rem' }}>
              Shipping To:
            </Typography>
            <Typography>{shippingInfo.name}</Typography>
            <Typography>{shippingInfo.address}</Typography>
            <Typography>{shippingInfo.city}, {shippingInfo.zip}</Typography>
            <Typography>{shippingInfo.country}</Typography>
          </div>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper elevation={3} style={{ padding: '2rem', margin: '2rem 0' }}>
        {getStepContent(activeStep)}
      </Paper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleSubmitOrder}>
            Place Order
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Checkout;