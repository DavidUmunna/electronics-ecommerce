// src/components/Footer/Footer.js
import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ElectroShop
            </Typography>
            <Typography variant="body2">
              Your one-stop shop for all electronics needs.
            </Typography>
            <div className={classes.socialIcons}>
              <Link href="#" className={classes.icon}>
                <Facebook />
              </Link>
              <Link href="#" className={classes.icon}>
                <Twitter />
              </Link>
              <Link href="#" className={classes.icon}>
                <Instagram />
              </Link>
              <Link href="#" className={classes.icon}>
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
        <Typography variant="body2" align="center" className={classes.copyright}>
          © {new Date().getFullYear()} ElectroShop. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;