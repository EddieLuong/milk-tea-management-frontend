import lodashHelper from 'lodash';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { SORT_BY_FIELD, SORT_DIRECTION } from '../../constants';
import productsData from '../../data/products.json';
import storeProductsData from '../../data/storeProducts.json';
import storesData from '../../data/stores.json';
import { Product, StoreProduct } from '../../types';
import FilterHeader from './components/FilterHeader';
import ProductItem from './components/ProductItem';
import { StoreMenuTitle, StoreWrapper } from './styles';

export interface SortByState {
  field: SORT_BY_FIELD.NAME | SORT_BY_FIELD.PRICE;
  direction: SORT_DIRECTION.ASC | SORT_DIRECTION.DESC;
}

const Store = () => {
  const [filteredToppings, setFilteredToppings] = useState<Array<string>>([]);
  const [sortBy, setSortBy] = useState<SortByState>({
    field: SORT_BY_FIELD.NAME,
    direction: SORT_DIRECTION.ASC,
  });
  const { storeId } = useParams<{ storeId: string }>();

  const selectedStore = storesData.stores.find(
    (store) => store.id === Number(storeId),
  );

  const { storeProducts }: { storeProducts: StoreProduct[] } =
    storeProductsData;
  const { products }: { products: Product[] } = productsData;

  const productsOfMenu: Product[] = React.useMemo(() => {
    return (
      storeProducts.find(
        (storeProduct) => storeProduct?.store_id === Number(storeId),
      )?.products || []
    ).map((productId) => {
      return products.find((product) => product.id === productId);
    });
  }, [storeId, storeProducts, products]);

  const toppingOptions = React.useMemo(() => {
    const result = [];
    for (const product of products) {
      for (const topping of product.toppings) {
        let isAlreadyInsideResult =
          result.findIndex((item) => item === topping) !== -1;

        if (!isAlreadyInsideResult) result.push(topping);
      }
    }

    return result;
  }, [products]);

  const filteredProductsOfMenu: Product[] = React.useMemo(() => {
    if (!filteredToppings.length) return productsOfMenu;

    return productsOfMenu.filter((product) => {
      let isProductContainFilteredToppings = filteredToppings.reduce(
        (result, item) => {
          return !product.toppings.includes(item) ? false : result;
        },
        true,
      );
      return isProductContainFilteredToppings;
    });
  }, [filteredToppings, productsOfMenu]);

  const sortedProductsOfMenu: Product[] = React.useMemo(() => {
    if (sortBy.field && filteredProductsOfMenu.length) {
      return lodashHelper.orderBy(
        filteredProductsOfMenu,
        [sortBy.field],
        [sortBy.direction],
      );
    }
    return filteredProductsOfMenu;
  }, [sortBy, filteredProductsOfMenu]);

  return (
    <StoreWrapper>
      <StoreMenuTitle variant="h4">{`${selectedStore.name} Menu`}</StoreMenuTitle>
      <FilterHeader
        setSortBy={setSortBy}
        sortBy={sortBy}
        toppingOptions={toppingOptions}
        filteredToppings={filteredToppings}
        setFilteredToppings={setFilteredToppings}
      />
      <Grid container spacing={5} className="store__product__grid">
        {sortedProductsOfMenu.map((product) => (
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            sx={{
              '&&&': {
                maxWidth: '75%',
              },
            }}
          >
            <ProductItem key={product.id} product={product} />
          </Grid>
        ))}
        {!sortedProductsOfMenu.length && (
          <Box mt={20} justifyContent="center" width="100%" textAlign="center">
            <Typography>No found product</Typography>
          </Box>
        )}
      </Grid>
    </StoreWrapper>
  );
};

export default Store;
