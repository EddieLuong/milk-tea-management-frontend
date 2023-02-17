import isPropValid from '@emotion/is-prop-valid';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface SideBarWrapperProps extends BoxProps {
  $isCollapse: boolean;
}

export const SideBarWrapper = styled(Box)<SideBarWrapperProps>(
  ({ theme, $isCollapse }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    zIndex: 10,
    [theme.breakpoints.up('md')]: {
      minWidth: '250px',
    },
    maxWidth: '250px',
    '@media (max-width: 570px)': {
      position: 'absolute',
      display: !$isCollapse && 'none',
      width: '100%',
      height: '100vh',
      pointerEvents: $isCollapse ? 'auto' : 'none',
    },
  }),
);

interface StoreItemWrapperProps extends BoxProps {
  $isActive: boolean;
}

export const StoreItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<StoreItemWrapperProps>(({ $isActive, theme }) => ({
  backgroundColor: $isActive && theme.palette.primary.light,
  padding: '16px 20px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  transition: 'all 0.15s ease',
}));

interface StoreTitleProps extends TypographyProps {
  $isActive: boolean;
}

export const StoreTitle = styled(Typography, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<StoreTitleProps>(({ $isActive, theme }) => ({
  color: $isActive ? theme.palette.common.white : theme.palette.grey[500],
  letterSpacing: '0.15px',
  transition: 'all 0.15s ease',
  textAlign: 'center',
}));

export const CloseMenuBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '10px',
  top: '10px',
  cursor: 'pointer',
  zIndex: 11,
  '@media (min-width: 570px)': {
    display: 'none',
  },
}));
