import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/Cartcontext';
import { Grid, Paper, Typography, Button,  TextField,Rating} from '@mui/material';




const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }} 
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <Rating value={product.rating} readOnly />
        <Typography variant="h5" color="primary" gutterBottom>
          ${product.price}
        </Typography>
        <Typography variant="body1" paragraph>
          {product.description}
        </Typography>
        
        <div style={{ margin: '20px 0' }}>
          <TextField
            type="number"
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            inputProps={{ min: 1 }}
            style={{ width: '80px', marginRight: '20px' }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>

        <Typography variant="h6" gutterBottom>
          Specifications
        </Typography>
        <ul>
          {product.specifications.map((spec, index) => (
            <li key={index}>
              <strong>{spec.key}:</strong> {spec.value}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default ProductPage;