import isPropValid from '@emotion/is-prop-valid';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const LayoutWrapper = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const MenuBox = styled(Box)(() => ({
  position: 'absolute',
  top: '10px',
  left: '10px',
  zIndex: 5,
  cursor: 'pointer',
  '@media (min-width: 600px)': {
    display: 'none',
  },
}));

interface ContainerWrapperProps extends BoxProps {
  $isCollapse: boolean;
}

export const ContentWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<ContainerWrapperProps>(({ theme, $isCollapse }) => ({
  flex: 1,
  minWidth: '150px',
  backgroundColor: theme.palette.grey[100],
  position: 'relative',
  overflowY: 'auto',
  padding: '30px 50px',
  '@media (max-width: 650px)': {
    padding: '37px 16px',
  },
}));
