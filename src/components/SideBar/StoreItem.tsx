import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { StoreItemWrapper, StoreTitle } from './styles';

interface StoreItemProps {
  title: string;
  path: string;
  setIsCollapse: (state) => void;
}

const StoreItem = ({ title, path, setIsCollapse }: StoreItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isStoreActive = location.pathname.includes(path);

  const handleSelectStore = () => {
    if (path !== location?.pathname) navigate(path);
    setIsCollapse(false);
  };

  return (
    <StoreItemWrapper $isActive={isStoreActive} onClick={handleSelectStore}>
      <StoreTitle $isActive={isStoreActive}>{title}</StoreTitle>
    </StoreItemWrapper>
  );
};

export default StoreItem;
