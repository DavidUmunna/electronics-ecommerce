// src/components/Header/Header.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Badge, 
  InputBase,
  Box
} from '@mui/material';
import { ShoppingCart, Search, AccountCircle } from '@mui/icons-material';
import { useCart } from '../../context/Cartcontext';
import { useAuth } from '../../context/AuthContext';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'sticky'
}));

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <StyledAppBar>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          ElectroShop
        </Typography>
        
        <SearchWrapper>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search products..."
          />
        </SearchWrapper>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Button color="inherit" component={Link} to="/shop">
          Shop
        </Button>
        
        {user ? (
          <>
            <Button 
              color="inherit" 
              component={Link} 
              to="/account"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <AccountCircle sx={{ mr: 1 }} />
              {user.name}
            </Button>
            <Button 
              color="inherit" 
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/account">
            Login
          </Button>
        )}
        
        <IconButton 
          color="inherit" 
          component={Link} 
          to="/cart"
          size="large"
        >
          <Badge badgeContent={cartItemCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;