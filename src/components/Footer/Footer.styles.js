// Footer.styles.js
import { styled } from '@mui/material/styles';

export const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

export const SocialIcons = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& > *': {
    marginRight: theme.spacing(1),
  },
}));

export const Icon = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const Copyright = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));


