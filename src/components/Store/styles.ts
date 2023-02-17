import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StoreWrapper = styled(Box)(({ theme }) => ({
  '&& .MuiInputBase-root': {
    padding: '6px',
  },
  '& .MuiOutlinedInput-root': {
    flexWrap: 'inherit',
    '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.grey[500]}`,
    },
  },
  '.store__product__grid': {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
}));

export const StoreMenuTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

export const FilterHeaderWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const FilterButton = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
  padding: '10px 50px',
  fontSize: '1rem',
  maxHeight: '50px',
}));

export const FilterToppingsGrid = styled(Grid)``;

export const FilterToppingContainer = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  padding: '20px 30px',
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const SortByLabel = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
  margin-right: 15px;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const ProductItemCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginTop: '40px',
  padding: '0 20px',
  borderRadius: '5px',
  color: theme.palette.primary.main,
  minHeight: '260px',
  [theme.breakpoints.up('lg')]: {
    maxWidth: '80%',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '90%',
  },
}));

export const ProductItemHeader = styled('div')``;

export const ProductItemContent = styled('div')``;
