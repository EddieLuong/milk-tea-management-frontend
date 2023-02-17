import React from 'react';

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SORT_BY_FIELD, SORT_DIRECTION } from '../../../constants';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import { SortByState } from '../Store';
import {
  FilterButton,
  FilterHeaderWrapper,
  FilterToppingContainer,
  FilterToppingsGrid,
  SortByLabel,
} from '../styles';

const SORT_BY_OPTIONS = [
  { title: 'Name', value: SORT_BY_FIELD.NAME },
  { title: 'Price', value: SORT_BY_FIELD.PRICE },
];

interface FilterHeaderProps {
  toppingOptions: string[];
  filteredToppings: string[];
  sortBy: SortByState;
  setSortBy: (state) => void;
  setFilteredToppings: (state) => void;
}

const FilterHeader = ({
  sortBy,
  setSortBy,
  toppingOptions,
  filteredToppings,
  setFilteredToppings,
}: FilterHeaderProps) => {
  const [isShowFilterToppings, setIsShowFilterTopping] = React.useState(false);
  const isSortAsc = sortBy.direction === SORT_DIRECTION.ASC;

  const handleToggleFilterContainer = () => {
    setIsShowFilterTopping((prev) => !prev);
  };

  const handleChangeFilter = (checked: boolean, topping: string) => {
    if (checked) {
      setFilteredToppings((prev) => {
        return [...prev, topping];
      });
    } else {
      setFilteredToppings((prev) => {
        const removedToppingIndex = prev.indexOf(topping);
        prev.splice(removedToppingIndex, 1);

        return [...prev];
      });
    }
  };

  return (
    <Box>
      <FilterHeaderWrapper>
        <FilterButton
          color="primary"
          variant="contained"
          onClick={() => handleToggleFilterContainer()}
        >
          Filter
        </FilterButton>
        <Box display="flex" alignItems="center">
          <SortByLabel
            style={{
              fontWeight: 'bold',
              fontSize: '14px',
              marginRight: '15px',
            }}
          >
            Sort By
          </SortByLabel>
          <Autocomplete
            options={SORT_BY_OPTIONS}
            defaultValue={SORT_BY_OPTIONS[0]}
            renderInput={(params) => <TextField {...params} />}
            getOptionLabel={(option) => option.title || ''}
            disableClearable
            style={{ minWidth: '120px' }}
            onChange={(_, option) => {
              setSortBy((prev) => ({
                ...prev,
                field: option.value,
              }));
            }}
          />
          <Box display="flex" flexDirection="column" zIndex={2}>
            <ArrowDropUpRoundedIcon
              color={!isSortAsc ? 'primary' : 'disabled'}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setSortBy((prev) => ({
                  ...prev,
                  direction: SORT_DIRECTION.DESC,
                }));
              }}
            />
            <ArrowDropDownRoundedIcon
              style={{ cursor: 'pointer' }}
              color={isSortAsc ? 'primary' : 'disabled'}
              onClick={() => {
                setSortBy((prev) => ({
                  ...prev,
                  direction: SORT_DIRECTION.ASC,
                }));
              }}
            />
          </Box>
        </Box>
      </FilterHeaderWrapper>
      {isShowFilterToppings && (
        <FilterToppingContainer>
          <Typography fontWeight="bold" marginBottom="10px">
            Toppings:
          </Typography>
          <FormGroup>
            <FilterToppingsGrid container spacing={2}>
              {toppingOptions.map((topping) => {
                return (
                  <Grid item xs={12} sm={6} lg={3} key={topping}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={filteredToppings.includes(topping)}
                          onChange={(_, checked) =>
                            handleChangeFilter(checked, topping)
                          }
                          name={topping}
                        />
                      }
                      color="primary"
                      label={capitalizeFirstLetter(topping)}
                    />
                  </Grid>
                );
              })}
            </FilterToppingsGrid>
          </FormGroup>
        </FilterToppingContainer>
      )}
    </Box>
  );
};

export default FilterHeader;
