// src/pages/Cart/Cart.styles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 0),
  },
  emptyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
  },
  emptyPaper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
    '& th': {
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
  },
  productCell: {
    display: 'flex',
    alignItems: 'center',
  },
  productImage: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    marginRight: theme.spacing(2),
  },
  quantityInput: {
    width: '60px',
    '& input': {
      textAlign: 'center',
    },
  },
  clearButton: {
    marginTop: theme.spacing(2),
  },
  summaryPaper: {
    padding: theme.spacing(3),
  },
  summaryTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  summaryDivider: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(2, 0),
  },
  checkoutButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1.5),
    fontSize: '1rem',
  },
  continueButton: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.5),
    fontSize: '1rem',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;