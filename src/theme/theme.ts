import { createTheme, ThemeOptions } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';

const themeOptions = (): ThemeOptions => {
  return {
    palette: palette,
    typography: typography,
  };
};

export const theme = createTheme(themeOptions());
