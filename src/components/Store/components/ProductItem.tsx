import React from 'react';
import { Product } from 'src/types';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import {
  ProductItemCard,
  ProductItemContent,
  ProductItemHeader,
} from '../styles';
import Box from '@mui/material/Box';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <ProductItemCard>
      <ProductItemHeader>
        <Typography>{`MT - ${product.id}`}</Typography>
        <Typography variant="h6" fontWeight="bold" mt="6px">
          {product.name}
        </Typography>
        <Divider
          sx={{
            borderWidth: '1.5px',
            borderColor: 'primary.main',
            borderRadius: '4px',
            marginTop: '10px',
          }}
        />
      </ProductItemHeader>
      <ProductItemContent>
        <Typography fontWeight="bold">Toppings:</Typography>
        <Typography>
          {product.toppings
            .map((topping) => capitalizeFirstLetter(topping))
            .join(', ')}
        </Typography>
        <Box marginTop="20px">
          <Typography
            style={{ float: 'right' }}
            variant="h6"
            fontWeight="bold"
          >{`$${product.price}`}</Typography>
        </Box>
      </ProductItemContent>
    </ProductItemCard>
  );
};

export default ProductItem;
