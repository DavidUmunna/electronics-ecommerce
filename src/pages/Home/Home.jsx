// src/pages/Home/Home.js
import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Paper,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import ProductList from '../../components/Productlisting';
import electroimage from "./assets/electronics.jpg"

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Paper 
        elevation={0}
        sx={{
          backgroundImage: `url(${electroimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white',
          py: 10,
          textAlign: 'center',

          mb: 4
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to ElectroShop
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Discover the latest electronics at unbeatable prices
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/shop"
            sx={{ mt: 2 }}
          >
            Shop Now
          </Button>
        </Container>
      </Paper>

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Featured Products
        </Typography>
        <ProductList />
      </Container>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {['Smartphones', 'Laptops', 'TVs', 'Audio'].map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                to={`/shop?category=${category.toLowerCase()}`}
                sx={{ 
                  height: 100,
                  fontSize: '1.2rem'
                }}
              >
                {category}
                {<ProductList category={category}/>}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;