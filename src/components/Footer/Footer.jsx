// src/components/Footer/Footer.js
import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import {FooterContainer,SocialIcons,Icon,Copyright} from './Footer.styles';

const Footer = () => {
  

  return (
    <footer className={FooterContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ElectroShop
            </Typography>
            <Typography variant="body2">
              Your one-stop shop for all electronics needs.
            </Typography>
            <div className={SocialIcons}>
              <Link href="#" className={Icon}>
                <Facebook />
              </Link>
              <Link href="#" className={Icon}>
                <Twitter />
              </Link>
              <Link href="#" className={Icon}>
                <Instagram />
              </Link>
              <Link href="#" className={Icon}>
                <LinkedIn />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Shop
            </Typography>
            <Link href="#" variant="body2" display="block">
              Smartphones
            </Link>
            <Link href="#" variant="body2" display="block">
              Laptops
            </Link>
            <Link href="#" variant="body2" display="block">
              TVs
            </Link>
            <Link href="#" variant="body2" display="block">
              Audio
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Link href="#" variant="body2" display="block">
              Contact Us
            </Link>
            <Link href="#" variant="body2" display="block">
              FAQs
            </Link>
            <Link href="#" variant="body2" display="block">
              Returns
            </Link>
            <Link href="#" variant="body2" display="block">
              Warranty
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href="#" variant="body2" display="block">
              Privacy Policy
            </Link>
            <Link href="#" variant="body2" display="block">
              Terms of Service
            </Link>
            <Link href="#" variant="body2" display="block">
              Shipping Policy
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" className={Copyright}>
          © {new Date().getFullYear()} ElectroShop. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;