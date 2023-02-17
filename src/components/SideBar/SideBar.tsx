import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import storesData from '../../data/stores.json';
import StoreItem from './StoreItem';
import { SideBarWrapper, CloseMenuBox } from './styles';

interface SideBarProps {
  isCollapse: boolean;
  setIsCollapse: (state) => void;
}

const SideBar = ({ isCollapse, setIsCollapse }: SideBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { stores } = storesData;

  useEffect(() => {
    if (location.pathname === '/' && stores.length) {
      navigate(String(stores[0].id));
    }
  }, [location.pathname, stores, navigate]);

  return (
    <SideBarWrapper $isCollapse={isCollapse}>
      <CloseMenuBox onClick={() => setIsCollapse(false)}>
        <CloseRoundedIcon />
      </CloseMenuBox>
      <Typography
        variant="h5"
        style={{ padding: '30px 20px', textAlign: 'center' }}
      >
        Milk Tea Store
      </Typography>
      {stores.map((store) => (
        <StoreItem
          title={store.name}
          path={`/${store.id}`}
          key={store.id}
          setIsCollapse={setIsCollapse}
        />
      ))}
    </SideBarWrapper>
  );
};

export default SideBar;
