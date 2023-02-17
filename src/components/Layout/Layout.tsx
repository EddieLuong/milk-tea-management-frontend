import React from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import SideBar from '../SideBar';
import { ContentWrapper, LayoutWrapper, MenuBox } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isCollapse, setIsCollapse] = React.useState(false);

  return (
    <LayoutWrapper>
      <MenuBox onClick={() => setIsCollapse(true)}>
        <MenuRoundedIcon color="primary" />
      </MenuBox>
      <SideBar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <ContentWrapper $isCollapse={isCollapse}>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
