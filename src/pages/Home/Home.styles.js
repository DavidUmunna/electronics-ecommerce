// src/pages/Home/Home.styles.js
import { styled } from '@mui/material/styles';
import { Paper, Button, Container } from '@mui/material';

export const HeroSection = styled(Paper)(({ theme }) => ({
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  boxShadow: 'none', // Remove Paper's default shadow if needed
}));

export const SectionContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const CategoryButton = styled(Button)(({ theme }) => ({
  height: 100,
  fontSize: '1.2rem',
  padding: theme.spacing(2),
}));